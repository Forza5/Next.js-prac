import Seo from "@/components/Seo";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ results }){
    const router = useRouter();
    const onClick = (id, title) => {
      router.push({
        pathname: `/movies/${id}`,
        query: {
          title,
        }
      }, `/movies/${id}`);
    }
    const [counter, setCounter] = useState(0);
    const [movies, setMovies] = useState([]);
    return (
      <div className="container">
        <Seo title="Home" />
        {results?.map(movie => {
          <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <h4>
              <Link href={`/movies/${movie.id}`}>
                <a>{movie.original_title}</a>
              </Link>
            </h4>
          </div>;}
          )
        }
        <style jsx>{`
          .container {
            display: grid;
            grid-template-colums: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie {
            cursor: pointer;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
        {/* <h1>Nextjs {counter}</h1> */}
        {/* <button onClick={() => setCounter((prev) => prev + 1)}>+</button> */}
      </div>
      // Nextjs는 우리 앱의 초기 상태를 활용해서 미리 렌더링되어 옴
      // => pre-rendering
      // 페이지가 로딩될 때 많은 스크립트를 같이 요청하는데, react.js가 넘겨받아서 잘 작동함
      // 페이지를 열자마자 보이는 것 => HTML
      // -> 그러고나서 react.js가 클라이언트로 전송되었을 때, react.js앱이 된다.
      // => react.js를 프론트엔드 안에서 실행하는 이런 것을 hydration이라고 부른다!!
      // => Next.js는 react.js를 백엔드에서 동작시켜서 이 페이지를 미리 만드는데 이 것이 component를 렌더링한다.
      // => 렌더링이 끝났을 때, HTML이 됨
      // => Next.js는 그 HTML을 페이지의 소스코드에 넣어준다.
      // => 유저는 자바스크립트와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있게 된다.

      /**
       * Next.js의 장점
       * - 유저가 웹사이트에 가면, 초기 상태의 component로 된 미리 생성된 HTML 페이지를 보게 되고,
       *   상호작용이 일어나면 react.js는 그걸 받아서 아주 잘 작동을 한다.
       * - 자바스크립트가 동작하지 않더라도 유저들은 앱의 어떠한 것들은 볼 수 있다.
       * - 모든게 다 로딩이 되면 react.js가 연결되면서 우리가 원하는 것들을 얻게 된다.
       */
    );
}

//getServerSideProps는 무조건 이 이름이어야함!!
//client가 아닌 server쪽에서만 작동함
//이 function은 오직 server side에서만 실행됨!!
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    }
  }
}

/**
 * library = 개발자로서 내가 사용하는 것
 * -- 내가 사용하고 싶을 때 사용 가능 
 * -- 내가 원할 때 언제든 어떤 방법으로든 부르면 됨
 * 
 * framework = 나의 코드를 불러오는 것
 * -- 코드를 적절한 위치에 잘 적기만 한다면
 * -- framework는 나의 코드를 불러와서 모든 걸 동작하게 함
 * -- 특정한 규칙을 따라서 특정한 것을 해야 함
 * -- 쉽게 말해, 코드를 어떤 곳에 넣으면, framework는 그 코드를 부른다.
 * 
 * ex) React.js
 * => 우리가 원할 때 부르고 원할 때 사용하는 library
 * 
 * -- framework 
 * => 예시를 들자면, 집 / 내가 코드를 적절한 곳에 넣어야 함
 * => 내가 그 집(framework)을 수정할 수는 없음!!
 */


// getServerSideProps
/**
 * pages에서 서버 측 렌더링 함수인 getServerSideProps함수를 export하는 경우
 * Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render한다.
 * getServerSideProps는 서버 측에서만 실행되면 브라우저에서는 실행되지 않는다.
 */