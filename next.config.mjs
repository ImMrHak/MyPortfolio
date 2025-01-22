/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    images: {
      unoptimized: true,
    },
    eslint: {
      ignoreDuringBuilds: true, // Disable ESLint during build
    },
  };
  
  export default nextConfig;