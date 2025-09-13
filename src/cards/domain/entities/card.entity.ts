import { EncryptionTypeEnum } from 'src/encryption/domain/enums/enums';

export class CardEntity {
  constructor(
    public cardId: number,
    public userName: string,
    public userLastName: string,
    public cardNumber: string,
    public encryptionType: EncryptionTypeEnum,
  ) {}

  static create({
  cardId,
  userName,
  userLastName,
  cardNumber,
  encryptionType ,
  }: CardEntity){
    return new CardEntity(
      cardId,
      userName,
      userLastName,
      cardNumber,
      encryptionType
    )
  }


  toString(): string {
    return `CardEntity {
      cardId: ${this.cardId},
      userName: ${this.userName},
      userLastName: ${this.userLastName},
      cardNumber: ${this.cardNumber},
      encryptionType: ${this.encryptionType}
    }`;
  }
}
