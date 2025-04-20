import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private secretKey = CryptoJS.enc.Hex.parse('b99fe877e5326a31a13096ccb6605553');
  private iv = CryptoJS.enc.Hex.parse('3e66eae19b4959beaa39f7a5e9708ce7');

  decrypt(encryptedText: string): any {
    try {
      const encryptedBytes = CryptoJS.enc.Base64.parse(encryptedText);

      const encryptedData = {
        ciphertext: encryptedBytes,
      } as CryptoJS.lib.CipherParams;

      const decrypted = CryptoJS.AES.decrypt(encryptedData, this.secretKey, {
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });

      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

      if (!decryptedText) {
        throw new Error('Decryption failed. Invalid key or data.');
      }

      return JSON.parse(decryptedText);
    } catch (error) {
      console.error('Decryption error:', error);
      return null;
    }
  }

  encrypt(value: any): string {
    try {
      const jsonString = JSON.stringify(value); 
     
      const encrypted = CryptoJS.AES.encrypt(jsonString, this.secretKey, {
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
  
      return encrypted.toString(); 

    } catch (error) {
      console.error('Encryption error:', error);
      return '';
    }
  }
}
