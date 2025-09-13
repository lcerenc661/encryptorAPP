import { EncryptionTypeEnum } from 'src/encryption/domain/enums/enums';
import { CardEntity } from '../entities/card.entity';

export abstract class CardRepostitory {
  abstract createCard(data: CreateCardArgs): Promise<CardEntity>;
  abstract getCards(): Promise<CardEntity[]>;
}

export interface CreateCardArgs {
  userName: string;
  userLastName: string;
  cardNumber: string;
  encryptionType: EncryptionTypeEnum;
}
