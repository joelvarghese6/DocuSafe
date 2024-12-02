import { create } from "zustand"

type User = {
    name: string;
    email: string;
    role: string;
    accessKey: string;
    pubKey: string;
}

type UserType = {
    user: User | {};
    setUser: (user?: User) => void;
}

export const useGetUser = create<UserType>((set) => ({
    user: {},
    setUser: (user?: User) => set({user: user}),
}))