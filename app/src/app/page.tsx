"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">AutoTask Web3 🚀</h1>

      <div className="mt-6">
        <WalletMultiButton />
      </div>
    </main>
  );
}