import { Injectable } from "@nestjs/common";
import { resolve } from "path";
import { CardEntity } from "src/cards/domain/entities/card.entity";
import { CardRepostitory, CreateCardArgs } from "src/cards/domain/repositories/card.repository";
import { delay } from "src/utils/delay";



@Injectable()
export class CardInMemoryRepositoryImpl implements CardRepostitory{

  private cardList: CardEntity[] = [];

  private nextId = 1


  async createCard(data: CreateCardArgs): Promise<CardEntity> {
    const newCardData = {
      ...data,
      cardId: this.nextId
    }

    this.nextId+=1
    const newCard = CardEntity.create(newCardData)
    this.cardList.push(newCard)
    await delay(100)
    return newCard
  }


  async getCards(): Promise<CardEntity[]> {
    await delay(100)
    return this.cardList
  }

}