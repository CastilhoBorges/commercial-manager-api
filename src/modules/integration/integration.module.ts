import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PipedriveProviders } from './pipedrive/pipedrive.providers';

@Module({
  imports: [TypeOrmModule.forFeature([]), HttpModule],
  providers: [...PipedriveProviders],
  exports: [],
})
export class IntegrationModule {}
