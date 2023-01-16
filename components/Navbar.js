import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
      // module.css => 자바스크립트 오브젝트에서의 프로퍼티 형식으로 적음
      // 페이지가 빌드될 때, Next.js가 클래스이름을 무작위로 바꿔줌
      // => 클래스이름 충돌을 겪지 않아도 됨
      <nav>
        {/* 조건부 삽입문 => css modules(``백틱을 사용해도 되고, 배열[]을 사용해도 됨) */}
        {/* <Link href="/">
          <a
            className={`${styles.link} ${
              router.pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={[
              styles.link,
              router.pathname === "/about" ? styles.active : "",
            ].join(" ")}
          >
            About
          </a>
        </Link> */}

        {/* styled jsx */}
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <style jsx>{`
            nav {
                background: tomato;
            }
            a {
                text-decoration: none;
            }
            .active {
                color: yellow;
            }
        `}</style>
      </nav>
    );
}

// Link는 우리에게 Next.js 앱의 클라이언트 사이드 네비게이션을 제공해줌