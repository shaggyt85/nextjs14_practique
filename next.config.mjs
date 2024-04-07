/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "src/sass")],
        prependData: `@import "main.sass"`,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.shopify.com",
            },
        ],
    },
};

export default nextConfig;
