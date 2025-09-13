import { Injectable } from "@nestjs/common";
import { Encryptor } from "../../domain/entities/encryptor";
import { EncryptionTypeEnum } from "src/encryption/domain/enums/enums";
import { createCipheriv, createDecipheriv, randomBytes } from "crypto";


const algorithm = "aes-256-cbc";
const key = randomBytes(32); 
const iv = randomBytes(16);  

@Injectable()
export class AesEncryptor implements Encryptor {
  encrypt(value: string): string {
    const cipher = createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
    return encrypted.toString("base64");
  }

  decrypt(value: string): string {
    const encryptedBuffer = Buffer.from(value, "base64");
    const decipher = createDecipheriv(algorithm, key, iv);
    const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
    return decrypted.toString("utf8");
  }

  encryptorType = EncryptionTypeEnum.AES;
}