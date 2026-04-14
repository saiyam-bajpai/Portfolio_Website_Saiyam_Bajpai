/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the basePath to match your repository name on GitHub Pages
  basePath: '/Portfolio_Website_Saiyam_Bajpai',
  assetPrefix: '/Portfolio_Website_Saiyam_Bajpai/',
};

export default nextConfig;
