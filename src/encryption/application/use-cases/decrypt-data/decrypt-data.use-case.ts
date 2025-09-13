import { Injectable } from "@nestjs/common";
import { EncryptorFactory } from "src/encryption/domain/entities/encryptor.factory";
import { EncryptionTypeEnum } from "src/encryption/domain/enums/enums";



@Injectable()
export class DecryptDataUseCase {
  constructor(
    private readonly encryptorFactory: EncryptorFactory
  ){}

  execute(encryptionType: EncryptionTypeEnum, data: string){
    const encryptor = this.encryptorFactory.createEncryptor(encryptionType)
    const decryptedData = encryptor.decrypt(data)
    return decryptedData;
  }
}