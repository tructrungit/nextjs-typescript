import * as React from "react";
import useSWR from "swr";

export interface IProductDetailProps {
  productId: number;
}

const MS_PER_HOUR = 60 * 60 * 1000;

export function ProductDetail({ productId }: IProductDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(
    `https://django-staging.beautytap.com/api/pages/${productId}`,
    {
      revalidateOnFocus: false,
      dedupingInterval: MS_PER_HOUR,
    }
  );

  function handleMutateClick() {
    mutate({ title: "123" }, true);
  }

  return (
    <div>
      <div>Title: {data?.title || "--"}</div>
      <button onClick={handleMutateClick}>Mutate</button>
    </div>
  );
}
