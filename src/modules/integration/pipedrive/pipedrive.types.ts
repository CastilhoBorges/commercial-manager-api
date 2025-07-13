export type PipedriveNextCursor = {
  next_cursor: string;
};

export type PipedriveResponseV2<T> = {
  sucess: boolean;
  data: T;
  additional_data: PipedriveNextCursor;
};
