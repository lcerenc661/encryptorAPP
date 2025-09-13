import { EncryptionTypeEnum } from "../enums/enums";
import { Encryptor } from "./encryptor";


export abstract class EncryptorFactory {
  abstract createEncryptor(encryptorType:EncryptionTypeEnum): Encryptor
}