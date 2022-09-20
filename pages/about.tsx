import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = dynamic(() => import("../components/common/header"), { ssr: false});

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  const page = router.query?.page

  console.log('About query: ', router.query)

  useEffect(() => {
    if (!page) return;

    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      )
      const data = await response.json()

      setPostList(data.data)
    })()
  }, [page])

  function handleNextClick() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        }
      },
      undefined,
      {shallow: true}
    )
  }

  return (
    <div>
      <h1>About page</h1>
      
      <Header />

      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Next page</button>
    </div>
  );
}

export async function getStaticProps() {
  console.log('get static props')

  return {
    props: {}
  }
  
}
