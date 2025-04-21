import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleVideoComponent } from './multiple-video.component';

describe('MultipleVideoComponent', () => {
  let component: MultipleVideoComponent;
  let fixture: ComponentFixture<MultipleVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
