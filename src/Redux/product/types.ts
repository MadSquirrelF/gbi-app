

export type Product = {
  id: string;
  title: string;
  price: number[];
  imageUrl: string;
  sizes: string[];
  classification: string;
  structure: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface ProductSliceState {
  items : Product[] ;
  status: Status ;
}

export type SearchProductParams = {
  category: string;
  order: string;
  sortBy: string;
  search: string;
}