import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionPartnerComponent } from './solution-partner.component';

describe('SolutionPartnerComponent', () => {
  let component: SolutionPartnerComponent;
  let fixture: ComponentFixture<SolutionPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
