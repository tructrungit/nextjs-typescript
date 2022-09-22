// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      items: any[];
      meta: any;
    }
  | { name: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method != "GET") {
    return res.status(404).json({ name: "method not supported" });
  }
  const response = await fetch(
    `https://django-staging.beautytap.com/api/pages/?type=product.ProductPage&fields=_,title,id&limit=5&offset=0`
  );
  const data = await response.json();

  res.status(200).json(data);
}
