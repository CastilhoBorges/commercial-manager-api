import { HttpService } from '@nestjs/axios';
import { IntegrationDeals } from '../../../integrations.interface';
import { firstValueFrom } from 'rxjs';
import { Injectable, Logger } from '@nestjs/common';
import { validatePipedriveEnv } from '../../../../../utils/funcions/validate-pipedrive-env';
import { AxiosError } from 'axios';
import { PIPEDRIVE_ENDPOINTS } from '../../pipedrive.constants';
import {
  DealsResponseV2,
  GetAllDealsQueryParams,
} from './pipedrive.deals-v2.types';

@Injectable()
export class PipedriveDealsServiceV2 implements IntegrationDeals {
  private readonly logger = new Logger(PipedriveDealsServiceV2.name);
  private readonly BASE_URL_V2: string;
  private readonly API_KEY: string;

  constructor(private readonly httpService: HttpService) {
    this.BASE_URL_V2 = process.env.PIPEDRIVE_BASE_URL_V2;
    this.API_KEY = process.env.PIPEDRIVE_API_KEY;

    validatePipedriveEnv(this.BASE_URL_V2, this.API_KEY);
  }

  async getAllDeals(
    queryParams: GetAllDealsQueryParams = {},
  ): Promise<DealsResponseV2> {
    const url = `${this.BASE_URL_V2}/${PIPEDRIVE_ENDPOINTS.DEALS}`;

    try {
      this.logger.log(
        `Fetching deals with params: ${JSON.stringify(queryParams)}`,
      );

      const response = await firstValueFrom(
        this.httpService.get<DealsResponseV2>(url, {
          params: {
            api_token: this.API_KEY,
            ...queryParams,
          },
        }),
      );

      return response.data;
    } catch (error: any) {
      this.logger.error('Error fetching deals:', error);

      if (error instanceof AxiosError) {
        throw new Error(
          `Pipedrive API Error: ${error.response?.status} - ${error.response?.data?.error || error.message}`,
        );
      }

      throw error;
    }
  }
}
