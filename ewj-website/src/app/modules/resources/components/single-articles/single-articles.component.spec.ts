import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticlesComponent } from './single-articles.component';

describe('SingleArticlesComponent', () => {
  let component: SingleArticlesComponent;
  let fixture: ComponentFixture<SingleArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
