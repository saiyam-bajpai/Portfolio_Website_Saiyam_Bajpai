/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the basePath to match your repository name on GitHub Pages
  basePath: '/Saiyam_Bajpai_Portfolio',
  assetPrefix: '/Saiyam_Bajpai_Portfolio/',
};

export default nextConfig;
