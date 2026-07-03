/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "xhhsyxjyeauffkgiwcbf.supabase.co",
            },
        ],
    },
};

export default nextConfig;