import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenersSectionComponent } from './parteners-section.component';

describe('PartenersSectionComponent', () => {
  let component: PartenersSectionComponent;
  let fixture: ComponentFixture<PartenersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenersSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
