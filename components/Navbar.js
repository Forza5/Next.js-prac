import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
      <nav>
        <Link href="/">
          <a style={{color: router.pathname === "/" ? "red" : "blue"}} className="hello">Home</a>
        </Link>
        <Link href="/about">
            <a style={{color: router.pathname === "/about" ? "red" : "blue"}}>About</a>
        </Link>
      </nav>
    );
}

// Link는 우리에게 Next.js 앱의 클라이언트 사이드 네비게이션을 제공해줌