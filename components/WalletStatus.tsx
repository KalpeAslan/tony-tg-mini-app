import { useWalletStore } from '@/lib/store';
import { Badge } from './ui/badge';

export function WalletStatus() {
  const { isConnected } = useWalletStore();

  return (
    <div className="flex items-center gap-2">
      <span>Wallet Status:</span>
      <Badge variant={isConnected ? 'default' : 'destructive'}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </Badge>
    </div>
  );
}
