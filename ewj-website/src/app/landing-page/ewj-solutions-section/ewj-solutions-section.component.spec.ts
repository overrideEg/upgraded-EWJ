import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwjSolutionsSectionComponent } from './ewj-solutions-section.component';

describe('EwjSolutionsSectionComponent', () => {
  let component: EwjSolutionsSectionComponent;
  let fixture: ComponentFixture<EwjSolutionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwjSolutionsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EwjSolutionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
