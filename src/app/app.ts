import { Component, signal } from '@angular/core';
import { BookmarksList } from './components/bookmarks-list/bookmarks-list';

@Component({
  selector: 'app-root',
  imports: [BookmarksList],
  template: `
    <div class="max-w-[600px] mx-auto relative">
      <div class="sticky top-0">
        <h1 class="px-2 py-1 text-md w-full text-gray-600 bg-white border-b border-b-gray-300 shadow-md">{{ title() }}</h1>
      </div>
      <app-bookmarks-list></app-bookmarks-list>
    </div>
  `,
})
export class App {
  protected readonly title = signal('Bookmarks');
}
