import { ethers } from "ethers";

export async function checkENSName(name) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    if (await provider.resolveName(name)){
        return true
    }
    return false;
}
export default checkENSName;