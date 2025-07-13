import { PipedriveResponseV2, SortBy, SortDirection } from '../../pipedrive.types';

export type StageV2 = {
  id: number;
  order_nr: number;
  name: string;
  is_deleted: boolean;
  deal_probability: number;
  pipeline_id: number;
  is_deal_rot_enabled: boolean;
  days_to_rotten: number;
  add_time: string;
  update_time: string;
};

export type StageResponseV2 = PipedriveResponseV2<StageV2[]>;

export type GetAllStagesQueryParams = {
  pipeline_id?: number;
  sort_by?: SortBy | 'order_nr';
  sort_direction?: SortDirection;
  limit?: number & { __min: 1; __max: 500 };
  cursor?: string;
};
