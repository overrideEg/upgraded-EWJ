import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoursesSectionComponent } from './resourses-section.component';

describe('ResoursesSectionComponent', () => {
  let component: ResoursesSectionComponent;
  let fixture: ComponentFixture<ResoursesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResoursesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResoursesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
