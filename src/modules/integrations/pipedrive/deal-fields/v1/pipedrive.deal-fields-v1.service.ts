import { HttpService } from '@nestjs/axios';
import { IntegrationDealFields } from '../../../integrations.interface';
import { firstValueFrom } from 'rxjs';
import { Injectable, Logger } from '@nestjs/common';
import { validatePipedriveEnv } from '../../../../../utils/funcions/validate-pipedrive-env';
import { AxiosError } from 'axios';
import { PIPEDRIVE_ENDPOINTS } from '../../pipedrive.constants';
import { GetAllDealFieldsQueryParams } from './pipedrive.deal-fields-v1.types';
import { DealsResponseV2 } from '../../deals/v2/pipedrive.deals-v2.types';

@Injectable()
export class PipedriveDealFieldsServiceV1 implements IntegrationDealFields {
  private readonly logger = new Logger(PipedriveDealFieldsServiceV1.name);
  private readonly BASE_URL_V1: string;
  private readonly API_KEY: string;

  constructor(private readonly httpService: HttpService) {
    this.BASE_URL_V1 = process.env.PIPEDRIVE_BASE_URL_V1;
    this.API_KEY = process.env.PIPEDRIVE_API_KEY;

    validatePipedriveEnv(this.BASE_URL_V1, this.API_KEY);
  }

  async getAllDealFields(
    queryParams: GetAllDealFieldsQueryParams = {},
  ): Promise<DealsResponseV2> {
    const url = `${this.BASE_URL_V1}/${PIPEDRIVE_ENDPOINTS.DEAL_FIELDS}`;

    try {
      this.logger.log(
        `Fetching deal fields with params: ${JSON.stringify(queryParams)}`,
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
      this.logger.error('Error fetching deal fields:', error);

      if (error instanceof AxiosError) {
        throw new Error(
          `Pipedrive API Error: ${error.response?.status} - ${error.response?.data?.error || error.message}`,
        );
      }

      throw error;
    }
  }
}
