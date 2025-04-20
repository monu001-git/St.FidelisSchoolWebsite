import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsConrnerComponent } from './kids-conrner.component';

describe('KidsConrnerComponent', () => {
  let component: KidsConrnerComponent;
  let fixture: ComponentFixture<KidsConrnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsConrnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsConrnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
