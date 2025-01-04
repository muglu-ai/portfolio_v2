/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Optional: enables React Strict Mode
    webpack(config) {
        // Example: add custom Webpack configurations here
        return config;
    }
};

module.exports = nextConfig;
