import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSolutionsComponent } from './product-solutions.component';

describe('ProductSolutionsComponent', () => {
  let component: ProductSolutionsComponent;
  let fixture: ComponentFixture<ProductSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
