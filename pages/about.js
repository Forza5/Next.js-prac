import NavBar from "@/components/Navbar";

export default function Next(){
    return <div>
        <NavBar />
        <h1>Nextjs</h1>
    </div>
}

// next.js는 pages의 있는 파일 명을 기준으로 가져다가 url의 이름으로 사용함!!
// 반드시 export default를 해주어야 함!!
// index 파일은 url = '/' / '/index'로 표현하지 않음!!
// jsx를 사용하고 있다면 React.js를 import할 필요가 없음
// Next.js는 앱에 있는 페이지들이 미리 렌더링 된다!!

/**
 * create-react-app
 * => client-side rendering
 * = 나의 브라우저가 유저가 보는 UI를 만드는 모든 것을 한다
 * = 브라우저가 자바스크립트를 가지고와서 client-side의 자바스크립트가 모든 UI를 만든다.
 * -- 오로지 <div></div> 하나만 유저가 보는 것이기 때문
 * => 쉽게 말해, 브라우저가 말 그대로 모든 것을 함
 */