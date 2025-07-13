import { PipedriveResponseV2, SortBy, SortDirection } from '../../pipedrive.types';

export type PipelineV2 = {
  id: number;
  name: string;
  order_nr: number;
  is_deleted: boolean;
  is_deal_probability_enabled: boolean;
  add_time: string;
  update_time: string;
  is_selected: boolean;
};

export type PipelinesResponseV2 = PipedriveResponseV2<PipelineV2[]>;

export type GetAllPipelinesQueryParams = {
  sort_by?: SortBy;
  sort_direction?: SortDirection;
  limit?: number & { __min: 1; __max: 500 };
  cursor?: string;
};
