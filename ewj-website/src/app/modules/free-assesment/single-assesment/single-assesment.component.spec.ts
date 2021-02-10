import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAssesmentComponent } from './single-assesment.component';

describe('SingleAssesmentComponent', () => {
  let component: SingleAssesmentComponent;
  let fixture: ComponentFixture<SingleAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
