import { Module } from '@nestjs/common';
import { Encryptor } from './domain/entities/encryptor';
import { RsaEncryptor } from './infrastructure/encryptors/rsa-encryptor';
import { AesEncryptor } from './infrastructure/encryptors/aes-encryptor';
import { AesEncryptorCreator } from './infrastructure/encryptor-creators/aes-encryptor.creator';
import { GetEncryptorUseCase } from './application/use-cases/get-encryptor/get-encryptor.use-case';
import { EncryptorFactory } from './domain/entities/encryptor.factory';
import { RsaEncryptorCreator } from './infrastructure/encryptor-creators/rsa-encryptor.creator';

@Module({
  providers:[
    GetEncryptorUseCase,
    RsaEncryptorCreator,
    RsaEncryptor,
    AesEncryptorCreator,
    AesEncryptor, 


    {
      provide: 'ENCRYPTOR_FACTORY', 
      useFactory:(
        aesEncryptorCreator: AesEncryptorCreator,
        rsaEncryptorCreator: RsaEncryptorCreator
      ): EncryptorFactory[] =>  [aesEncryptorCreator,rsaEncryptorCreator ],
      inject: [AesEncryptorCreator, RsaEncryptorCreator]
    },
  ],
  exports:[
    GetEncryptorUseCase
    
  ]
})
export class EncryptionModule {}
