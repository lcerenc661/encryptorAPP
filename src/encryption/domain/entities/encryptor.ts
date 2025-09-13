import { EncryptionTypeEnum } from "../enums/enums";

export interface Encryptor {
   encrypt(value: string): string
   decrypt(value: string): string

}