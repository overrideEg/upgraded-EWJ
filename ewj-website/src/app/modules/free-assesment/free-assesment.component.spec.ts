import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAssesmentComponent } from './free-assesment.component';

describe('FreeAssesmentComponent', () => {
  let component: FreeAssesmentComponent;
  let fixture: ComponentFixture<FreeAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeAssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
