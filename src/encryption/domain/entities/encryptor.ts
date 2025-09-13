import { EncryptionTypeEnum } from "../enums/enums";

export abstract class Encryptor {
  abstract encrypt(value: string): string
  abstract decrypt(value: string): string
  encryptorType: EncryptionTypeEnum
}