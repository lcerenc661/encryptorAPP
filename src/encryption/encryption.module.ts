import { Module } from '@nestjs/common';
import { Encryptor } from './domain/entities/encryptor';
import { RsaEncryptor } from './infrastructure/encryptors/rsa-encryptor';
import { AesEncryptor } from './infrastructure/encryptors/aes-encryptor';
import { EncryptorFactoryProvider } from './infrastructure/encryptor.factory.provider';
import { EncryptDataUseCase } from './application/use-cases/encrypt-data/encrypt-data.use-case';
import { DecryptDataUseCase } from './application/use-cases/decrypt-data/decrypt-data.use-case';
import { EncryptorFactory } from './domain/entities/encryptor.factory';

@Module({
  providers:[

    EncryptDataUseCase,
    DecryptDataUseCase,
    EncryptorFactoryProvider,

    
    RsaEncryptor,
    AesEncryptor,
    {
      provide: 'ENCRYPTOR_FACTORY', 
      useFactory:(
        aesEncryptor: AesEncryptor,
        rsaEncryptor: RsaEncryptor
      ): Encryptor[] =>  [aesEncryptor,rsaEncryptor ],
      inject: [AesEncryptor, RsaEncryptor]
    },
    {
      provide: EncryptorFactory,
      useExisting: EncryptorFactoryProvider,
    }
  ],
  exports:[
    EncryptDataUseCase,
    DecryptDataUseCase
    
  ]
})
export class EncryptionModule {}
