import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Bookmark } from '../../types/bookmark';
import { sortByDeletedAndDate } from '../../utils/sortByDeleteAndDate';
import { ApiService } from '../api/api';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  bookmarks: WritableSignal<Bookmark[]> = signal([]);
  private apiService: ApiService = inject(ApiService);

  constructor() {
    this.getBookmarks();
  }

  getBookmarks = async () => {
    const bookmarks: Bookmark[] = await this.apiService.customFetch({ url: environment.apiUrl });
    if (bookmarks.length) {
      const sorted = bookmarks.toSorted(sortByDeletedAndDate);
      this.bookmarks.set(sorted);
    }
  };

  toggleDelete = async (bookmark: Bookmark, preventDBUpdate?: boolean) => {
    const bookmarks = this.bookmarks();
    const bmIndex = bookmarks.findIndex((bm) => bm.id === bookmark.id);
    if (bmIndex === -1) {
      console.error('Bookmark not found in state');
    } else {
      bookmarks[bmIndex].deleted = !bookmarks[bmIndex].deleted;
      this.bookmarks.set(bookmarks);

      if (!preventDBUpdate) {
        await this.updateBookmarkInDb(bookmarks[bmIndex]);
      }
    }
  };

  private sortBookmarks = () => {
    const bms = this.bookmarks();
    this.bookmarks.set(bms.toSorted(sortByDeletedAndDate));
  };

  private updateBookmarkInDb = async (bookmark: Bookmark) => {
    try {
      const res = await this.apiService.customFetch({
        url: environment.apiUrl,
        method: 'PUT',
        payload: bookmark,
      });
      if (res.ok) {
        this.sortBookmarks();
      }
    } catch (e) {
      console.error('Error on updateBookmarkInDB: ', e);
      // Run toggle again to revert change in Bookmark, without triggering DB update
      this.toggleDelete(bookmark, true);
    }
  };
}
