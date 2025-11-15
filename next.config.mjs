import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  reactStrictMode: true,
  // config lain jika ada
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  disable: process.env.NODE_ENV === "development"
})(nextConfig);
