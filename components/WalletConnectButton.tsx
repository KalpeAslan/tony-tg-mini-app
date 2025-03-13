import { Button } from './ui/button';
import { useWalletStore } from '@/lib/store';

export function WalletConnectButton() {
  const { isConnected, connect, disconnect } = useWalletStore();

  return (
    <Button
      onClick={isConnected ? disconnect : connect}
      variant={isConnected ? 'outline' : 'default'}
    >
      {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
    </Button>
  );
}
