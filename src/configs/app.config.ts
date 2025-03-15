export class AppConfig {
  get tgRedirectUrl(): `${string}://${string}` {
    return process.env.NEXT_PUBLIC_TG_REDIRECT_URL as `${string}://${string}`;
  }

  get apiUrl(): string {
    return process.env.NEXT_PUBLIC_API_URL as string;
  }
}


export const appConfig = new AppConfig();