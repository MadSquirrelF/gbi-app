export enum SortPropertyOrderEnum {
  DESC = 'desc',
  ASC = 'asc',
}
export enum SortPropertyEnum {
  RATING = 'rating',
  TITLE = 'title',
  PRICE = 'prices',
}
export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
  sortOrder: SortPropertyOrderEnum;
}

export interface FilterSliceState {
  searchValue:string;
  categoryId:number;
  sort:Sort;
}