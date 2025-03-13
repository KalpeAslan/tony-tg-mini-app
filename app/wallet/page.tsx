import { WalletConnectButton } from '@/components/WalletConnectButton';
import { WalletStatus } from '@/components/WalletStatus';

export default function WalletPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Wallet Dashboard</h1>

      <div className="flex flex-col gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Wallet Connection</h2>
          <div className="flex flex-col gap-4">
            <WalletStatus />
            <div>
              <WalletConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
