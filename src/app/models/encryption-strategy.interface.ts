export interface IEncryptionStrategy {
  encrypt(openText: string, key: string): string;

  decrypt(closedText: string, key: string): string;
}
