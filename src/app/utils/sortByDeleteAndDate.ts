import { Bookmark } from '../types/bookmark';

export const sortByDeletedAndDate = (a: Bookmark, b: Bookmark) => {
  if (a.deleted) return 1;
  if (b.deleted) return -1;
  return a.dateAdded > b.dateAdded ? 1 : -1;
};
