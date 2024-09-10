export interface MetaData<T> {
  code: number;
  message: string;
  data: DataT<T>;
}

export interface DataT<T> {
  total: number;
  list: T[];
}

export interface Data<T> {
  code: number;
  message: string;
  data: T;
}
