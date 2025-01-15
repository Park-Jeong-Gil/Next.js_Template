import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /**
   * output: "export" - 정적 웹사이트 생성을 위한 설정
   * 빌드 시 순수 HTML/CSS/JS 파일들을 생성하여 정적 호스팅이 가능하게 함
   */
  // output: "export",
  /**
   * trailingSlash: true - URL 끝에 슬래시(/)를 자동으로 추가
   * 예: /about -> /about/
   * SEO 및 정적 파일 호스팅 시 일관된 URL 구조를 보장
   */
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
    implementation: require('sass'), // 명시적으로 sass 구현체 지정
    // logger: {
    //   warn: function (message: string) {
    //     // Dart Sass 레거시 API 경고 무시
    //     if (message.includes('Deprecation')) return;
    //     console.warn(message);
    //   },
    // },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
