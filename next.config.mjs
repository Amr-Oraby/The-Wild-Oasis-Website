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
    // output: "export" // no server
};

export default nextConfig;