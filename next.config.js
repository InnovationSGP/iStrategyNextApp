/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_URL: "https://www.innovationsgp.com",
        NEXTAUTH_SECRET: "USEREXPERIENCE"
    },

    images: {
        domains: ["res.cloudinary.com", "www.wordpress.innovationsgp.com"]
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    }
};

module.exports = nextConfig;