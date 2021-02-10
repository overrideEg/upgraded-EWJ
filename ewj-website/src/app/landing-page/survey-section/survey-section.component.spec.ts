import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySectionComponent } from './survey-section.component';

describe('SurveySectionComponent', () => {
  let component: SurveySectionComponent;
  let fixture: ComponentFixture<SurveySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
