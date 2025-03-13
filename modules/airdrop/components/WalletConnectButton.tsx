import { Button } from '../../../components/ui/button';
import { useWalletStore } from '@/lib/store';

export function WalletConnectButton() {
  const { isConnected, connect, disconnect } = useWalletStore();

  return (
    <Button
      onClick={() => {
        if (isConnected) {
          disconnect();
        } else {
          connect();
        }
      }}
      variant={isConnected ? 'outline' : 'default'}
    >
      {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
    </Button>
  );
}
