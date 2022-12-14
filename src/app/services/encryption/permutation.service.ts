import { Injectable } from "@angular/core";
import { IEncryptionStrategy } from "src/app/models/encryption-strategy.interface";

@Injectable({ providedIn: 'root' })
export class PermutationService implements IEncryptionStrategy {
  public encrypt(openText: string, key: string): string {
    return 'PERMUTATED TEXT';
  }

  public decrypt(closedText: string, key: string): string {
    throw new Error("Method not implemented.");
  }
}
