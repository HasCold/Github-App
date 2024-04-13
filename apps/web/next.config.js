/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  async rewrites(){
    return [
         {
             source: '/api/:path*', // Match any route starting with /api
             destination: 'http://localhost:4000/api/:path*', // Proxy to the server on localhost:5000
         },
       ]
 }
};
