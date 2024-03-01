/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                pathname:'**'
            },
            {
                protocol:'https',
                hostname: 'upload.wikimedia.org',
                pathname:'**'
            },
        ],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

export default nextConfig;
