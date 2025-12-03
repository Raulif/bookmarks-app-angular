import { Component, inject } from '@angular/core';
import { BookmarksService } from '../../services/bookmarks/bookmarks-service';
import { BookmarkItem } from '../bookmark-item/bookmark-item';

@Component({
  selector: 'app-bookmarks-list',
  imports: [BookmarkItem],
  template: `
    <section class="bookmarks ">
      <ul>
        @for(bookmark of this.bookmarksService.bookmarks(); track $index) {
        <app-bookmark-item
          [bookmark]="bookmark"
          [toggleDelete]="bookmarksService.toggleDelete"
        ></app-bookmark-item>
        }
      </ul>
    </section>
  `,
  styleUrl: './bookmarks-list.scss',
})
export class BookmarksList {
  bookmarksService: BookmarksService = inject(BookmarksService);
}
