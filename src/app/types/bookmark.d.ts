export interface Bookmark {
  consumed: boolean;
  createdAt: number;
  dateAdded: number;
  hearable: boolean;
  id: string;
  title: string;
  url: string;
  dbIndex?: number;
  deleted?: boolean;
}
