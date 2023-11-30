import { createProxyMiddleware } from "http-proxy-middleware";
import type { NextApiRequest, NextApiResponse } from "next/types";

const apiProxy = createProxyMiddleware({
  target: process.env.NEXT_PUBLIC_API_URL,
  changeOrigin: true,
  secure: true,
  pathRewrite: {
    "^/api/graphql": "/graphql",
  },
}) as any;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return apiProxy(req, res, (result: unknown) => {
    if (result instanceof Error) {
      throw result;
    }

    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    );
  });
};

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export default handler;
