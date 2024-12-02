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
            data: [
                {
                    docId: "ardasdasdasd-asdadasd-asdasdasd-yuiyui",
                    docHash: "asdasdfadfsdfasdasdasd",
                    docname: "aadhar card",
                    timestamp: "2024-11-01",
                },
                {
                    docId: "ardasdasdasd-asdadasd-asdasdasd-ghjghj",
                    docHash: "asdasdfadfsdfasdasdasd",
                    docname: "pan card",
                    timestamp: "2024-11-01",
                },
                {
                    docId: "ardasdasdasd-asdadasd-asdasdasd-zxczxc",
                    docHash: "asdasdfadfsdfasdasdasd",
                    docname: "voter Id",
                    timestamp: "2024-11-01",
                },
                {
                    docId: "ardasdasdasd-asdadasd-asdasdasd-qweqwe",
                    docHash: "asdasdfadfsdfasdasdasd",
                    docname: "license",
                    timestamp: "2024-11-01",
                }
            ]
        });
    }

    res.send({
        error: "You must be signed in to view the protected content on this page.",
    });
}
