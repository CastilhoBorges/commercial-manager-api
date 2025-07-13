import { PipedriveResponseV2, SortBy, SortDirection } from '../../pipedrive.types';

export interface DealV2 {
  id: number;
  title: string;
  creator_user_id: number;
  owner_id: number;
  value: number;
  person_id: number;
  org_id: number;
  stage_id: number;
  pipeline_id: number;
  currency: string;
  archive_time: string | null;
  add_time: string;
  update_time: string;
  stage_change_time: string;
  status: 'open' | 'won' | 'lost';
  is_archived: boolean;
  is_deleted: boolean;
  probability: number;
  lost_reason: string | null;
  visible_to: number;
  close_time: string | null;
  won_time: string | null;
  lost_time: string | null;
  local_won_date: string | null;
  local_lost_date: string | null;
  local_close_date: string | null;
  expected_close_date: string | null;
  label_ids: number[];
  origin: any;
  origin_id: string | null;
  channel: number;
  channel_id: string;
  acv: number;
  arr: number;
  mrr: number;
  custom_fields: any;
}

export type DealsResponseV2 = PipedriveResponseV2<DealV2[]>;

export interface GetAllDealsQueryParams {
  filter_id?: number;
  ids?: number[];
  owner_id?: number;
  person_id?: number;
  org_id?: number;
  pipeline_id?: number;
  stage_id?: number;
  status?: 'open' | 'won' | 'lost' | 'deleted';
  updated_since?: string;
  updated_until?: string;
  sort_by?: SortBy;
  sort_direction?: SortDirection;
  include_fields?: any;
  custom_fields?: any;
  limit?: number;
  cursor?: string;
}
