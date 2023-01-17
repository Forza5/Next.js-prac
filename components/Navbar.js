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
        <img src="/vercel.svg" />
        <div>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/about">
              <a className={router.pathname === "/about" ? "active" : ""}>About</a>
          </Link>
        </div>
        <style jsx>{`
            nav {
                display: flex;
                gap: 10px;
                flex-direction: column;
                align-items: center;
                padding-top: 20px;
                padding-bottom: 10px;
                box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px;
            }
            img {
              max-width: 100px;
              margin-bottom: 5px;
            }
            nav a {
                text-decoration: none;
                font-weight: 600;
                font-size: 18px;
            }
            .active {
                color: yellow;
            }
            nav div {
              display: flex;
              gap: 10px;
            }
        `}</style>
      </nav>
    );
}

// Link는 우리에게 Next.js 앱의 클라이언트 사이드 네비게이션을 제공해줌