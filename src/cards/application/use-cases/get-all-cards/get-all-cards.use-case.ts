import { Injectable, Logger } from "@nestjs/common";
import { CardEntity } from "src/cards/domain/entities/card.entity";
import { CardRepostitory } from "src/cards/domain/repositories/card.repository";
import { DecryptDataUseCase } from "src/encryption/application/use-cases/decrypt-data/decrypt-data.use-case";


@Injectable()
export class GetAllCardsUseCase {
  private readonly logger = new Logger(GetAllCardsUseCase.name)

  constructor(
    private readonly cardsRepository: CardRepostitory,
    private readonly decrypTDataUseCase: DecryptDataUseCase
  ){}

  async execute(): Promise<CardEntity[]>{
    const cardList: CardEntity[] = await this.cardsRepository.getCards()
    const decryptedList: CardEntity[] = cardList.map((card)=>({...card, cardNumber: this.decrypTDataUseCase.execute(card.encryptionType, card.cardNumber)}))
    this.logger.log(decryptedList)
    return decryptedList

  }
}