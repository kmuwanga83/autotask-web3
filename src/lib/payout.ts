import { 
  Transaction, 
  SystemProgram, 
  PublicKey, 
  Connection, 
  LAMPORTS_PER_SOL 
} from '@solana/web3.js';

/**
 * Executes a split payment on Solana.
 * @param connection - The Solana JSON-RPC connection
 * @param payer - The PublicKey of the person paying for the task
 * @param workerAddress - The wallet address of the task completer
 * @param amountInSol - Total bounty amount
 */
export const createSplitPayout = async (
    payer: PublicKey,
    workerAddress: string,
    amountInSol: number
) => {
    const transaction = new Transaction();
    const treasuryAddress = new PublicKey(process.env.NEXT_PUBLIC_TREASURY_ADDRESS!);
    const workerPubKey = new PublicKey(workerAddress);

    // Calculate amounts
    const totalLamports = amountInSol * LAMPORTS_PER_SOL;
    const feeAmount = Math.floor(totalLamports * 0.01); // 1% Fee
    const workerAmount = totalLamports - feeAmount;    // 99% Payout

    // Instruction 1: Pay the Worker
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: payer,
            toPubkey: workerPubKey,
            lamports: workerAmount,
        })
    );

    // Instruction 2: Pay the Platform Fee (Bags Hackathon Requirement)
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: payer,
            toPubkey: treasuryAddress,
            lamports: feeAmount,
        })
    );

    return transaction;
};
