import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    basePath: '/mng',
    output: 'standalone',
    allowedDevOrigins: ['task.ecoclimate.com']
};

export default nextConfig;
