import { EncryptionTypeEnum } from 'src/encryption/domain/enums/enums';
import {
  CardRepostitory,
  CreateCardArgs,
} from 'src/cards/domain/repositories/card.repository';
import { Injectable, Logger } from '@nestjs/common';
import { EncryptDataUseCase } from 'src/encryption/application/use-cases/encrypt-data/encrypt-data.use-case';

@Injectable()
export class CreateCardUseCase {
  private readonly logger = new Logger(CreateCardUseCase.name);
  constructor(
    private readonly cardRepository: CardRepostitory,
    private readonly encrypDataUseCase: EncryptDataUseCase,
  ) {}

  async execute(dto: CreateCardDTO) {
    const { userName, userLastName, cardNumber, encryptionType } = dto;
    const cardData: CreateCardArgs = {
      userName,
      userLastName,
      cardNumber: this.encrypDataUseCase.execute(encryptionType, cardNumber),
      encryptionType,
    };

    const card = await this.cardRepository.createCard(cardData);
    this.logger.log(`Card created with id ${card.cardId} - ${card.toString()}`);
  }
}

interface CreateCardDTO {
  userName: string;
  userLastName: string;
  cardNumber: string;
  encryptionType: EncryptionTypeEnum;
}
