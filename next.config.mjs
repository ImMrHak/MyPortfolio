/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    basePath: '/MyPortfolio',
    assetPrefix: '/MyPortfolio/',
    images: {
      unoptimized: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;