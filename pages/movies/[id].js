import { useRouter } from "next/router";

export default function Detail(){
    const router = useRouter();
    return <div>
        {/* router.query.title은 유저가 홈페이지에서 상세페이지로 넘어올때만 존재 */}
        <h4>{router.query.title || "Loading..."}</h4>
    </div>;
}

//Next.js에 '이것이 변수를 포함하는 Dynamic URL이다'라는 것을 알려주는 유일한 방법은
// 페이지(파일 변수명)에 대괄호[]사용!!