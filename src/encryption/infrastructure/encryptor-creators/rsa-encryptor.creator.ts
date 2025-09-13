import { Injectable } from "@nestjs/common";
import { Encryptor } from "../../domain/entities/encryptor";
import { EncryptorFactory } from "../../domain/entities/encryptor.factory";
import { EncryptionTypeEnum } from "../../domain/enums/enums";
import { RsaEncryptor } from "../encryptors/rsa-encryptor";

@Injectable()
export class RsaEncryptorCreator extends EncryptorFactory {

  encryptorType = EncryptionTypeEnum.RSA;

  createEncryptor(): Encryptor {
    return new RsaEncryptor()
  }
}