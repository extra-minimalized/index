/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages 저장소 이름으로 변경하세요
  basePath: '/index',
  assetPrefix: '/index',
  
  // App Router에서 동적 경로를 사용하지 않는 경우
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig