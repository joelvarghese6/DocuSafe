import { useQuery } from "react-query";

type User = {
    name: string;
    email: string;
    role: string;
    accessKey: string;
    pubKey: string;
}

type GetUserQueryParams = {
    userId: string;
}

const QUERY_KEY = ["User"];

const fetchUser = async (params: GetUserQueryParams): Promise<User> => {
    const url = "http://localhost:3000/api/user/fetchIndividualUser"
    const response = await fetch(url)
    const data = response.json();
    return data;
};

export const useGetUser = (params: GetUserQueryParams) => {
    return useQuery<User, Error>(QUERY_KEY, () => fetchUser(params));
};