/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "xhhsyxjyeauffkgiwcbf.supabase.co",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
        ],

        qualities: [75, 80, 100],
    },

    // output: "export",
};

export default nextConfig;