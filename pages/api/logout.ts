// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookie from "cookies";

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
  if (req.method != "POST") {
    return res.status(404).json({ message: "method not supported" });
  }

  const cookies = new Cookie(req, res);
  cookies.set('access_token')

  res.status(200).json({ message: "Logout successfully" })
}
