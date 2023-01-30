import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyWorkoutComponent } from './modify-workout.component';

describe('ModifyWorkoutComponent', () => {
  let component: ModifyWorkoutComponent;
  let fixture: ComponentFixture<ModifyWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
