import { Controller, Post, Body, Get } from "@nestjs/common";
import { IsString, IsNotEmpty, IsEnum, Length } from "class-validator";
import { EncryptionTypeEnum } from "src/encryption/domain/enums/enums";
import { CreateCardUseCase } from "../application/use-cases/create-card/create-card.use-case";
import { GetAllCardsUseCase } from "../application/use-cases/get-all-cards/get-all-cards.use-case";


class CreateCardHttpDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  userLastName: string;

  @IsString()
  @IsNotEmpty()
  @Length(12, 19) 
  cardNumber: string;

  @IsEnum(EncryptionTypeEnum)
  encryptionType: EncryptionTypeEnum;
}

@Controller('card')
export class CardController{

  constructor(
    private readonly createCardUseCase: CreateCardUseCase,
    private readonly getAllCardUseCAse: GetAllCardsUseCase
  ){}

  @Post()
  async createCard(
    @Body() body: CreateCardHttpDto
  ) {
    return await this.createCardUseCase.execute(body);    
  }

  @Get()
  async getCards(){
    return await this.getAllCardUseCAse.execute()
  }

}




