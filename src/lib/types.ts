// Button types
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'orange'
  | 'orange-outline'
  | 'gray'
  | 'blue'
  | 'green';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'extra-sm';


export enum EPages {
  Shack = '/shack',
  Invites = '/invites',
  Airdrop = '/',
  Packs = '/packs',
}

// Layout types
export type LayoutVariant = 'purple' | 'yellow';

// Wallet types
export interface WalletInfo {
  address: string;
  balance: number;
  network: string;
} 