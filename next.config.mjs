/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = withVideos({
  // Your existing Next.js configuration options here
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/eczema-and-psoriasis",
  basePath: "/eczema-and-psoriasis",
});

export default nextConfig;
