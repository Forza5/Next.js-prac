/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    // redirection step1. source를 찾는다.
    // redirection step2. destination으로 유저를 보낸다.
    // redirection step3. redirection이 pemanent(영구적)인지 아닌지에 따라,
    // 브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정됨
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-nextjs-blog/:path*",
        permanent: false,
      }
    ]
  },
  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  }
}

module.exports = nextConfig

//next.config.js
/**
 * Next.js에서 커스텀 설정을 하기 위한 프로젝트 디렉터리 루트
 * next.config.js는 JSON파일이 아닌 일반 Node.js 모듈
 * Next.js 서버 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않는다.
 */

// Redirects
/**
 * URL이 변경됨!!
 * Redirects를 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirects할 수 있다.
 * Redirects를 사용하려면 next.config.js에서 redirects 키를 사용 가능하다.
 * Redirects는 source, destination, permanent 속성이 있는 객체를 포함하는 배열을 반환하는 비동기 함수!!
 * -- source: 들어오는 request 경로 패턴 (request 경로)
 * -- destination: 라우팅하려는 경로 (redirect할 경로)
 * -- permanent: true인 경우 클라이언트와 search엔진에 redirect를 영구적으로 캐시(cache)하도록 지시하는
 * 308 status code를 사용하고, false인 경우 일시적이고 cache되지 않은 307 status code 사용
 */

// Rewrites
/**
 * URL 변경되지 않음!!
 * Rewrites를 사용하면 들어오는 Request 경로를 다른 destination 경로에 매핑할 수 있다.
 * Rewrites는 URL 프록시 역할을 하고, destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 한다.
 * -- 이와 반대인 Redirects는 새 페이지로 reroute되고 URL변경 사항을 표시한다.
 */