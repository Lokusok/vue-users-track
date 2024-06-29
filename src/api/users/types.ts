export interface IPaginationResponse<T> {
  data: T[];
  page: number;
  perPage: number;
  maxPage: number;
}
