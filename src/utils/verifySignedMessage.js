import { ethers } from "ethers";

import VerifyContract from './build/verify.json'

import { selectContractInstance} from './web3'


export async function verifySignedMessage(publicKey, signature) {

    const contract = await selectContractInstance(VerifyContract);

    const sigBreakdown = ethers.utils.splitSignature(signature)
    
    return contract.isSigned(publicKey, signature, sigBreakdown)
}