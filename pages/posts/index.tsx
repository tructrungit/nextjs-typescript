import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { title } from "process";
import React from "react";

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <div>
      <h1>Post list page</h1>;
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // build-time
  const response = await fetch(
    "https://django-staging.beautytap.com/api/pages/?type=product.ProductPage&fields=_,title,id&limit=5&offset=0"
  );
  const data = await response.json();

  return {
    props: {
      posts: data.items.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};
