import { Injectable } from '@angular/core';
import { IEncryptionStrategy } from '../models/encryption-strategy.interface';

@Injectable({ providedIn: 'root' })
export class EncryptionService {
  private _strategy?: IEncryptionStrategy;

  public setEncryptionStrategy(strategy: IEncryptionStrategy) {
    this._strategy = strategy;
  }

  public encrypt(openText: string, key: string): string {
    if (!this._strategy) {
      throw new Error('Strategy not selected. Use method setStrategy()');
    }

    return this._strategy.encrypt(openText, key);
  }
}
