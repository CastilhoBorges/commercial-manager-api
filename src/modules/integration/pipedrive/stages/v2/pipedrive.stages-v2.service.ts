import { HttpService } from '@nestjs/axios';
import { IntegrationStages } from '../../../integrations.interface';
import { firstValueFrom } from 'rxjs';
import { Logger } from '@nestjs/common';
import { validatePipedriveEnv } from '../../../../../utils/funcions/validate-pipedrive-env';
import { AxiosError } from 'axios';
import { PIPEDRIVE_ENDPOINTS } from '../../pipedrive.constants';
import {
  GetAllStagesQueryParams,
  StageResponseV2,
} from './pipedrive.stages-v2.types';

export class PipedriveStagesServiceV2 implements IntegrationStages {
  private readonly logger = new Logger(PipedriveStagesServiceV2.name);
  private readonly BASE_URL_V2: string;
  private readonly API_KEY: string;

  constructor(private readonly httpService: HttpService) {
    this.BASE_URL_V2 = process.env.PIPEDRIVE_BASE_URL_V2;
    this.API_KEY = process.env.PIPEDRIVE_API_KEY;

    validatePipedriveEnv(this.BASE_URL_V2, this.API_KEY);
  }

  async getAllStages(
    options?: GetAllStagesQueryParams,
  ): Promise<StageResponseV2> {
    const url = `${this.BASE_URL_V2}/${PIPEDRIVE_ENDPOINTS.STAGES}`;

    try {
      this.logger.debug(
        `Fetching stages with params: ${JSON.stringify(options)}`,
      );

      const response = await firstValueFrom(
        this.httpService.get<StageResponseV2>(url, {
          params: {
            api_token: this.API_KEY,
            ...options,
          },
        }),
      );

      return response.data;
    } catch (error: any) {
      this.logger.error('Error fetching stages:', error);

      if (error instanceof AxiosError) {
        throw new Error(
          `Pipedrive API Error: ${error.response?.status} - ${error.response?.data?.error || error.message}`,
        );
      }

      throw error;
    }
  }
}
