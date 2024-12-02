import { useWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "react-query"
import { AnchorProvider, Program } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";

type InputProps = {
    name: string;
    email: string;
    wallet: string;
}
export const useCreateUser = () => {

    const { publicKey, sendTransaction, signTransaction } = useWallet();

    // const provider = new AnchorProvider(
    //     new Connection("https://api.devnet.solana.com"), // Use your cluster URL
    //     { publicKey: publicKey ?? new PublicKey("Fjbwxvvj4yk83jKLRnbKjjJoAoxnMoKyMDKkQ2StbvQ4"), sendTransa },
    //     { commitment: "confirmed" }
    // );

    const mutation = useMutation({
        mutationFn: async ({ name, email, wallet }: InputProps) => {

        }
    })
}