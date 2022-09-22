import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/layout";

const Header = dynamic(() => import("../components/common/header"), {
  ssr: false,
});

export interface AboutPageProps {
  posts: [];
}

export default function AboutPage({ posts }: AboutPageProps) {
  const [postList, setPostList] = useState(posts);
  const router = useRouter();
  const page = router.query?.page;
  const limit: number = 5;

  console.log("About query: ", router);

  useEffect(() => {
    if (!page) return;
    console.log("page: ", page);
    let offset = page ? (Number(page) - 1) * limit : 0;
    console.log("offset: ", offset);
    let url = `https://django-staging.beautytap.com/api/pages/?type=product.ProductPage&fields=_,title,id&limit=${limit}&offset=${offset}`;
    console.log(url);

    (async () => {
      const response = await fetch(url);
      const data = await response.json();

      setPostList(data.items);
    })();
  }, [page]);

  function handleNextClick() {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <MainLayout>
      <h1>About page</h1>

      <Header />

      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Next page</button>
    </MainLayout>
  );
}

export async function getStaticProps() {
  console.log("get static props");
  let url = `https://django-staging.beautytap.com/api/pages/?type=product.ProductPage&fields=_,title,id&limit=5&offset=0`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      posts: data.items,
    },
  };
}
