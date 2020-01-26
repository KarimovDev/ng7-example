import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  public getSessionStorageValue(key: string) {
    return sessionStorage.getItem(key);
  }

  public setSessionStorageValue(key: string, value: string) {
    return sessionStorage.setItem(key, value);
  }
}
