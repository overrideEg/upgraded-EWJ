import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenersPageComponent } from './parteners-page.component';

describe('PartenersPageComponent', () => {
  let component: PartenersPageComponent;
  let fixture: ComponentFixture<PartenersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
