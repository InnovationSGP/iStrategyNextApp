import { jwtVerify, SignJWT } from "jose";

interface UserJWTPayload {
  jti: string;
  iat: number;
}

export const getJWTSecretkey = () => {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0)
    throw new Error("The env variable for JWT_SECRET_KEY is not set");

  return secret;
};

export const verifyAuth = async (token: string) => {
  try {
    const verifed = await jwtVerify(
      token,
      new TextEncoder().encode(getJWTSecretkey())
    );
    return verifed.payload as UserJWTPayload;
  } catch (error) {
    throw new Error("Token Expired");
  }
};
