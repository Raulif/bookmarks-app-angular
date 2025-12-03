import { Bookmark } from './bookmark';

export type FetchOptions = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  payload?: Array<Bookmark> | Bookmark | string;
};
