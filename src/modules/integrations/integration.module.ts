import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PipedriveProviders } from './pipedrive/pipedrive.providers';
import { IntegrationsController } from './integration.controller';

@Module({
  imports: [HttpModule],
  controllers: [IntegrationsController],
  providers: [...PipedriveProviders],
  exports: [...PipedriveProviders],
})
export class IntegrationsModule {}
