import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyWorkoutDetailsComponent } from './modify-workout-details.component';

describe('ModifyWorkoutDetailsComponent', () => {
  let component: ModifyWorkoutDetailsComponent;
  let fixture: ComponentFixture<ModifyWorkoutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyWorkoutDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyWorkoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
