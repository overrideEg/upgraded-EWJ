import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTotouneyComponent } from './go-totouney.component';

describe('GoTotouneyComponent', () => {
  let component: GoTotouneyComponent;
  let fixture: ComponentFixture<GoTotouneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoTotouneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTotouneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
