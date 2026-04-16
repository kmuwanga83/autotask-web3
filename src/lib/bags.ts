import { BagsSDK } from '@bagsfm/bags-sdk';
import { Connection } from '@solana/web3.js';

const commitment = 'processed';
const connection = new Connection(
    process.env.NEXT_PUBLIC_SOLANA_RPC || 'https://api.mainnet-beta.solana.com', 
    commitment
);

export const sdk = new BagsSDK(
    process.env.NEXT_PUBLIC_BAGS_API_KEY!, 
    connection, 
    commitment
);
