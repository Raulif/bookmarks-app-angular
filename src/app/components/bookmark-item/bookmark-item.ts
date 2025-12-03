import { Component, Input } from '@angular/core';
import { Bookmark } from '../../types/bookmark';

@Component({
  selector: 'app-bookmark-item',
  imports: [],
  template: `
    <li class="flex flex-col items-start border-b-1 border-b-gray-300 px-2 py-3">
      <span class="bookmark-date text-sm {{ bookmark?.deleted ? 'opacity-40' : '' }}">{{
        this.formatDate(bookmark?.dateAdded)
      }}</span>
      <a
        [href]="bookmark?.url"
        target="_blank"
        class="hover:underline text-[#8a2be2] {{
          bookmark?.deleted ? 'pointer-events-none opacity-40' : ''
        }}"
      >
        {{ bookmark?.title }}
      </a>
      <div class="flex gap-1 justify-end w-full mt-2">
        <button
          class="delete cursor-pointer border px-2 rounded-sm hover:text-white {{
            bookmark?.deleted ? 'hover:bg-[#8a2be2]' : 'text-red-500 hover:bg-red-500 '
          }}"
          (click)="toggleDelete?.(bookmark)"
        >
          {{ bookmark?.deleted ? 'Restore' : 'Delete' }}
        </button>
      </div>
    </li>
  `,
  styleUrl: './bookmark-item.scss',
})
export class BookmarkItem {
  @Input() bookmark?: Bookmark;
  @Input() consume?: Function;
  @Input() toggleDelete?: Function;

  formatDate = (date?: number) => {
    if (!date) return;
    const newDate = new Date(date);
    const day = `${newDate.getDate() < 10 ? 0 : ''}${newDate.getDate()}`;
    const month = `${newDate.getMonth() < 10 ? 0 : ''}${newDate.getMonth()}`;
    const year = newDate.getFullYear();
    return `${day}.${month}.${year}`;
  };
}
