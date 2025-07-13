import { HttpService } from '@nestjs/axios';
import { IntegrationPipelines } from '../../../integrations.interface';
import {
  GetAllPipelinesQueryParams,
  PipelinesResponseV2,
} from './pipedrive.pipelines-v2.types';
import { firstValueFrom } from 'rxjs';
import { Logger } from '@nestjs/common';
import { validatePipedriveEnv } from '../../../../../utils/funcions/validate-pipedrive-env';
import { AxiosError } from 'axios';
import { PIPEDRIVE_ENDPOINTS } from '../../pipedrive.constants';

export class PipedrivePipelinesServiceV2 implements IntegrationPipelines {
  private readonly logger = new Logger(PipedrivePipelinesServiceV2.name);
  private readonly BASE_URL_V2: string;
  private readonly API_KEY: string;

  constructor(private readonly httpService: HttpService) {
    this.BASE_URL_V2 = process.env.PIPEDRIVE_BASE_URL_V2;
    this.API_KEY = process.env.PIPEDRIVE_API_KEY;

    validatePipedriveEnv(this.BASE_URL_V2, this.API_KEY);
  }

  async getAllPipelines(
    options: GetAllPipelinesQueryParams = {},
  ): Promise<PipelinesResponseV2> {
    const url = `${this.BASE_URL_V2}/${PIPEDRIVE_ENDPOINTS.PIPELINES}`;

    try {
      this.logger.debug(
        `Fetching pipelines with params: ${JSON.stringify(options)}`,
      );

      const response = await firstValueFrom(
        this.httpService.get<PipelinesResponseV2>(url, {
          params: {
            api_token: this.API_KEY,
            ...options,
          },
        }),
      );

      return response.data;
    } catch (error: any) {
      this.logger.error('Error fetching pipelines:', error);

      if (error instanceof AxiosError) {
        throw new Error(
          `Pipedrive API Error: ${error.response?.status} - ${error.response?.data?.error || error.message}`,
        );
      }

      throw error;
    }
  }
}
