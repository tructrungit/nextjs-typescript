import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";

export interface PostDetailPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter();

  if (!post) return null;

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.title}</p>
      <p>{post.rating}</p>
      <p>{post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://django-staging.beautytap.com/api/pages/?type=product.ProductPage&fields=_,title,id&limit=5&offset=0"
  );
  const data = await response.json();

  return {
    paths: data.items.map((post: any) => ({
      params: { postId: post.id.toString() },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("\nGET STATIC PROPS", context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };
  // server-side
  // build-time
  const response = await fetch(
    `https://django-staging.beautytap.com/api/pages/${postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
};
