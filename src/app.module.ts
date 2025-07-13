import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseModule } from './common/config/base/base-service';
import { IntegrationModule } from './modules/integration/integration.module';

export const modules = [IntegrationModule];

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [] }), ...modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule extends BaseModule {
  constructor() {
    super();
  }
}
