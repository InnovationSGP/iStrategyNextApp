export interface User {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
  id?: string;
}

interface RegistrationData {
  name: string;
  email: string;
  password: string;
}

export interface IncomingContactMessages {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
}
