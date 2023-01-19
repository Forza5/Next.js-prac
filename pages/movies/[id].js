import { useRouter } from "next/router";

export default function Detail(){
    const router = useRouter();
    console.log(router);
    return "detail";
}

//Next.js에 '이것이 변수를 포함하는 Dynamic URL이다'라는 것을 알려주는 유일한 방법은
// 페이지(파일 변수명)에 대괄호[]사용!!