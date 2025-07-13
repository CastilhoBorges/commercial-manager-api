import { PipedriveResponseV2 } from '../../pipedrive.types';

export type DealFieldsOptions = {
  id: number;
  label: string;
};

export type DealFieldsV1 = {
  id: number;
  key: string;
  name: string;
  order_nr: number;
  field_type: string;
  add_time: string;
  update_time: string;
  last_updated_by_user_id: number;
  created_by_user_id: number;
  active_flag: boolean;
  edit_flag: boolean;
  index_visible_flag: boolean;
  details_visible_flag: boolean;
  add_visible_flag: boolean;
  important_flag: boolean;
  bulk_edit_allowed: boolean;
  searchable_flag: boolean;
  filtering_allowed: boolean;
  sortable_flag: boolean;
  options?: DealFieldsOptions[];
  mandatory_flag: boolean;
};

export type DealFieldsResponseV1 = PipedriveResponseV2<DealFieldsV1[]>;

export interface GetAllDealFieldsQueryParams {
  start?: number;
  limit?: number;
}
