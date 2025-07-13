export type Pagination<T> = {
  page: number;
  perPage: number;
  search?: string;
  filter?: T;
};
