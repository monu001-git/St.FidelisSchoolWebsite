import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FouriconComponent } from './fouricon.component';

describe('FouriconComponent', () => {
  let component: FouriconComponent;
  let fixture: ComponentFixture<FouriconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FouriconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FouriconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
