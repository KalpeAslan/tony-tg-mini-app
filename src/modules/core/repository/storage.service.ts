import { coreConstants } from '../constants';

class StorageService {
  //  private methods
  private getItem(key: string) {
    return window.localStorage.getItem(key);
  }

  private setItem(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  //  public methods

  getIsTelegramMocked() {
    return this.getItem('isTelegramMocked');
  }

  setIsTelegramMocked(value: boolean) {
    this.setItem('isTelegramMocked', value.toString());
  }

  getTelegramMockedData() {
    return this.getItem(coreConstants.keys.initDataRaw);
  }

  setTelegramMockedData(value: string) {
    this.setItem(coreConstants.keys.initDataRaw, value);
  }

  getAccessToken() {
    return this.getItem(coreConstants.keys.accessToken);
  }

  setAccessToken(value: string) {
    this.setItem(coreConstants.keys.accessToken, value);
  }
}

export const storageService = new StorageService();
