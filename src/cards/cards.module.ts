import { Module } from '@nestjs/common';
import { EncryptionModule } from 'src/encryption/encryption.module';
import { CreateCardUseCase } from './application/use-cases/create-card/create-card.use-case';
import { GetAllCardsUseCase } from './application/use-cases/get-all-cards/get-all-cards.use-case';
import { CardController } from './interface/cards.controller';
import { CardRepostitory } from './domain/repositories/card.repository';
import { CardInMemoryRepositoryImpl } from './infrastructure/persistance/card.in-memory.repository-implt';

@Module({
  imports:[
    EncryptionModule
  ],
  controllers:[CardController],
  providers:[
    CreateCardUseCase,
    GetAllCardsUseCase,
    CardInMemoryRepositoryImpl,

  {
    provide: CardRepostitory,
    useExisting: CardInMemoryRepositoryImpl
  }
  ]
})
export class CardsModule {}
