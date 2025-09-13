import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { EncryptionModule } from './encryption/encryption.module';

@Module({
  imports: [CardsModule, EncryptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
