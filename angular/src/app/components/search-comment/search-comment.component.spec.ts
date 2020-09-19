import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCommentComponent } from './search-comment.component';

describe('SearchCommentComponent', () => {
  let component: SearchCommentComponent;
  let fixture: ComponentFixture<SearchCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
