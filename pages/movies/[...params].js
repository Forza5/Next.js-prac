import { useRouter } from "next/router";
import Seo from "@/components/Seo";

export default function Detail(){
    const router = useRouter();
    const [title, id] = params || [];
    return (
        <div>
            {/* router.query.title은 유저가 홈페이지에서 상세페이지로 넘어올때만 존재 */}
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
}

//SEO 최적화되게 만들고 싶다면 getServerSideProps사용!!
export function getServerSideProps({params:{params}}) {
    return {
        props: {
            params,
        },
    }
}

//Next.js에 '이것이 변수를 포함하는 Dynamic URL이다'라는 것을 알려주는 유일한 방법은
// 페이지(파일 변수명)에 대괄호[]사용!!