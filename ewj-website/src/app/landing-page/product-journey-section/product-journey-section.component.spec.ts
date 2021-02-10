import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductJourneySectionComponent } from './product-journey-section.component';

describe('ProductJourneySectionComponent', () => {
  let component: ProductJourneySectionComponent;
  let fixture: ComponentFixture<ProductJourneySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductJourneySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductJourneySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
