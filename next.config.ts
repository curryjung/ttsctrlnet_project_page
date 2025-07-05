import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ttsctrlnet_project_page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ttsctrlnet_project_page/' : '',
};

export default nextConfig;
