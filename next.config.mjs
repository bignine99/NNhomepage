/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // SWC 미니파이 비활성화 (Windows 파일 잠금 문제 해결)
    swcMinify: false,
    // 웹팩 파일 시스템 캐싱 비활성화 (파일 잠금 문제 완화 시도)
    webpack: (config) => {
        config.cache = false;
        return config;
    },
    // 온디맨드 엔트리 최적화 (파일 접근 빈도 감소)
    onDemandEntries: {
        maxInactiveAge: 60 * 1000,
        pagesBufferLength: 5,
    },
};

export default nextConfig;
