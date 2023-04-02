import { ethers } from "ethers";

export const getAdminWallet = () => {
    const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC || "alter dinosaur crazy eternal lunch obscure belt simple grain almost half urban");

    const provider = new ethers.providers.JsonRpcProvider(
        process.env.JSON_RPC_ENDPOINT || "https://rpc.testnet.fantom.network/"
    );

    return wallet.connect(provider);
};
