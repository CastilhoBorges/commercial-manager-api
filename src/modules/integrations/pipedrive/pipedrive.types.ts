export type PipedriveNextCursor = {
  next_cursor: string;
};

export type PipedriveResponseV2<T> = {
  sucess: boolean;
  data: T;
  additional_data: PipedriveNextCursor;
};

export type SortDirection = 'asc' | 'desc';

export type SortBy = 'id' | 'update_time' | 'add_time';
