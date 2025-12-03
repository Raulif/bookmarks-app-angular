import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksList } from './bookmarks-list';

describe('BookmarksList', () => {
  let component: BookmarksList;
  let fixture: ComponentFixture<BookmarksList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarksList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarksList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
