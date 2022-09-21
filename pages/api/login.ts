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

const proxy = httpProxy.createProxyServer();

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
  if (req.method != "POST") {
    return res.status(404).json({ message: "method not supported" });
  }

  return new Promise((resolve) => {
    console.log("login request");

    // don't send cookies to API Server
    req.headers.cookie = "";

    const handleLoginRes: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", (chunk) => {
        body += chunk;
      });

      proxyRes.on("end", () => {
        try {
          const { accessToken, expireAt } = JSON.parse(body);
          console.log({ accessToken, expireAt });


          // convert token to cookies
          const cookies = new Cookie(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });

          cookies.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expireAt),
          });

          console.log(JSON.stringify(cookies));

          ;(res as NextApiResponse)
              .status(200)
              .json({ message: "login successfully" });
        } catch (e) {
          (res as NextApiResponse)
              .status(500)
              .json({ message: "something went wrong" });
        }
        resolve(true);
      });
    };

    proxy.once("proxyRes", handleLoginRes);
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
