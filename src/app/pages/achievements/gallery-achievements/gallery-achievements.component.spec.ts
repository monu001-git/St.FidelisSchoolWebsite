import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAchievementsComponent } from './gallery-achievements.component';

describe('GalleryAchievementsComponent', () => {
  let component: GalleryAchievementsComponent;
  let fixture: ComponentFixture<GalleryAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryAchievementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
