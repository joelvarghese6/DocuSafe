import { useQuery } from "react-query";

type Document = {
    docId: string;
    docHash: string;
    docname: string;
    timestamp: string;
}

type GetDocByUserParams = {
    userId: string;
}

type Response = {
    data: Document[]
}

const QUERY_KEY = ["Document"];

const fetchDocumentsbyUser = async (params: GetDocByUserParams): Promise<Response> => {
    const url = "http://localhost:3000/api/document/fetchAllDocByUser"
    const response = await fetch(url);
    const data = response.json();
    return data;
};

export const useGetDocumentByUser = (params: GetDocByUserParams) => {
    return useQuery<Response, Error>(QUERY_KEY, () => fetchDocumentsbyUser(params));
};