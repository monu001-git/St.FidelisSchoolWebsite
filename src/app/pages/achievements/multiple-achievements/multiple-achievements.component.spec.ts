import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAchievementsComponent } from './multiple-achievements.component';

describe('MultipleAchievementsComponent', () => {
  let component: MultipleAchievementsComponent;
  let fixture: ComponentFixture<MultipleAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleAchievementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
