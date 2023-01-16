//_app.js 무조건 이 파일명으로 만들어야 함!!
// => Next.js는 About이 렌더링되기 전에 먼저 App을 보기 때문
// 확인 순서
// _app.js -> index.js의 내용물 확인
// _app.js에 넣어둔 청사진을 기반으로 확인
// 쉽게 말해, _app.js는 blueprint(청사진)

import NavBar from "@/components/Navbar";
import "../styles/globals.css";

// Nextjs는 Component prop에 내가 원하는 페이지를 넣으면, 그 페이지를 렌더링 함
export default function App({Component, pageProps}){
    return (
      <>
        <NavBar />
        <Component {...pageProps} />
        <span>Hello, Next.js</span>
        {/* global style 적용 가능 */}
        <style jsx global>{`
          a {
            color: #fff;
          }
        `}</style>
      </>
    );
}

// 내 페이지나 내 컴포넌트 내에 css를 import하고 싶다면, 반드시 그건 module이어야만 함!!
// 하지만 커스텀 App 컴포넌트가 있는 곳에서는 Global Styles를 import할 수 있음!!