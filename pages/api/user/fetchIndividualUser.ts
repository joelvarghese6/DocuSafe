// This is an example of to protect an API route
import { unstable_getServerSession } from "next-auth/next";

import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req, secret });

  if (!token || !token.sub)
    return res.send({
      error: "Not authenticated",
    });

  if (token) {
    return res.send({
        data: {
            name: "Allen",
            email: "allen@solexample.com",
            role: "user",
            accessKey: "", //Master key Hash - master key is stored in neondb
            pubKey: "2tBUHRfWHVPAkFcm4KdoqngVrudvBSmC7PSCorCUofU2",
        }
    });
  }

  res.send({
    error: "You must be signed in to view the protected content on this page.",
  });
}
