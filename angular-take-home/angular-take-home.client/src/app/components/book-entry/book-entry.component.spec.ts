import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEntryComponent } from './book-entry.component';

describe('BookEntryComponent', () => {
  let component: BookEntryComponent;
  let fixture: ComponentFixture<BookEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookEntryComponent]
    });
    fixture = TestBed.createComponent(BookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
