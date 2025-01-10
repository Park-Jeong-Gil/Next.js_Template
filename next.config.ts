import type { NextConfig } from "next";
import path from "path";

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
  // sassOptions 옵션 추가
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    // prependData 옵션 추가
    // prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
  },
};

export default nextConfig;
