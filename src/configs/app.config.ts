export class AppConfig {
  get tgRedirectUrl(): `${string}://${string}` {
    return process.env.NEXT_PUBLIC_TG_REDIRECT_URL as `${string}://${string}`;
  }

  get apiUrl(): string {
    return process.env.NEXT_PUBLIC_API_URL as string;
  }

  get tonAddress(): string {
    return process.env.NEXT_PUBLIC_TON_ADDRESS as string;
  }

  get pacmanUrl(): string {
    return process.env.NEXT_PUBLIC_PACMAN_IFRAME_URL as string;
  }

  get additionalExpForInviteWhichBoughtPack(): number {
    return 5;
  }
}

export const appConfig = new AppConfig();