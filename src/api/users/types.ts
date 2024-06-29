export interface IPaginationResponse<T> {
  data: T[];
  perPage: number;
  maxPage: number;
}
