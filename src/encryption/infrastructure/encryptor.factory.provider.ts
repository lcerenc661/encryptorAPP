import { Inject } from "@nestjs/common";
import { Encryptor } from "../domain/entities/encryptor";
import { EncryptorFactory } from "../domain/entities/encryptor.factory";
import { EncryptionTypeEnum } from "../domain/enums/enums";


export class EncryptorFactoryProvider implements EncryptorFactory {

  constructor(
    @Inject('ENCRYPTOR_FACTORY')
    private readonly encryptors: Encryptor[]
  ){}
  createEncryptor(encryptorType: EncryptionTypeEnum): Encryptor {
    const encryptor = this.encryptors.find((encryptor)=> encryptor.encryptorType === encryptorType) 
    if (!encryptor){
      throw new Error('Encryptor not found')
    }
    return encryptor
  }

}