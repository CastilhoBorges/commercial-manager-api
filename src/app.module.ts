import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseModule } from './common/config/base/base-service';
import { IntegrationsModule } from './modules/integrations/integration.module';

export const modules = [IntegrationsModule];

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
