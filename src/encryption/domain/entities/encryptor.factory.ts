import { EncryptionTypeEnum } from '../enums/enums';
import { Encryptor } from './encryptor';

export abstract class EncryptorFactory {
  abstract createEncryptor(): Encryptor;
  encryptorType: EncryptionTypeEnum;

  public encrypt(data: string) {
    const encryptor = this.createEncryptor();
    return encryptor.encrypt(data);
  }

  public decrypt(data: string) {
    const encryptor = this.createEncryptor();
    return encryptor.decrypt(data);
  }
}
