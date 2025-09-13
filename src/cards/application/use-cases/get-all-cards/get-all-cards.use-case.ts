import { Injectable, Logger } from "@nestjs/common";
import { CardEntity } from "src/cards/domain/entities/card.entity";
import { CardRepostitory } from "src/cards/domain/repositories/card.repository";
import { GetEncryptorUseCase } from "src/encryption/application/use-cases/get-encryptor/get-encryptor.use-case";


@Injectable()
export class GetAllCardsUseCase {
  private readonly logger = new Logger(GetAllCardsUseCase.name)

  constructor(
    private readonly cardsRepository: CardRepostitory,
    private readonly getEncryptor: GetEncryptorUseCase,
  ){}

  async execute(): Promise<CardEntity[]>{
    const cardList: CardEntity[] = await this.cardsRepository.getCards()
    const decryptedList: CardEntity[] = cardList.map((card)=>{
      const encryptor = this.getEncryptor.execute(card.encryptionType)
      return {
        ...card,
        cardNumber: encryptor.decrypt(card.cardNumber)
      }

    })
    this.logger.log(decryptedList)
    return decryptedList
  }



  
}