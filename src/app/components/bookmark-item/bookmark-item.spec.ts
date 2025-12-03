import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkItem } from './bookmark-item';

describe('Bookmark', () => {
  let component: BookmarkItem;
  let fixture: ComponentFixture<BookmarkItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkItem],
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
