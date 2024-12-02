import { useQuery } from "react-query";

type Document = {
    docId: string;
    docHash: string;
    docname: string;
    timestamp: string;
}

type GetDocParams = {
    docId: string;
}

type Response = {
    data: Document[]
}

const QUERY_KEY = ["Document"];

const fetchDocumentbyId = async (params: GetDocParams): Promise<Response> => {
    const url = "http://localhost:3000/api/document/fetchDocByDocId"
    const response = await fetch(url);
    const data = response.json();
    return data;
};

export const useGetDocumentById = (params: GetDocParams) => {
    return useQuery<Response, Error>(QUERY_KEY, () => fetchDocumentbyId(params));
};