import { Inject, Injectable } from "@nestjs/common";
import { Encryptor } from "../../domain/entities/encryptor";
import { EncryptorFactory } from "../../domain/entities/encryptor.factory";
import { EncryptionTypeEnum } from "../../domain/enums/enums";
import { AesEncryptor } from "../encryptors/aes-encryptor";

@Injectable()
export class AesEncryptorCreator extends EncryptorFactory {

  encryptorType = EncryptionTypeEnum.AES;

  createEncryptor(): Encryptor {
    return new AesEncryptor()
  }
}