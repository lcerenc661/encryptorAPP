

import { Inject, Injectable } from "@nestjs/common";
import { EncryptorFactory } from "src/encryption/domain/entities/encryptor.factory";
import { EncryptionTypeEnum } from "src/encryption/domain/enums/enums";



@Injectable()
export class GetEncryptorUseCase {
  constructor(
    @Inject('ENCRYPTOR_FACTORY')
    private readonly encryptorCreators: EncryptorFactory[]
  ){}

  execute(encryptionType: EncryptionTypeEnum){
    const encryptorCreator = this.encryptorCreators.find((creator)=> creator.encryptorType === encryptionType)
    if (!encryptorCreator){
    throw new Error(`Encryptor creator not created for the encryption type ${encryptionType}`)
    }
    return encryptorCreator.createEncryptor()
  }
}