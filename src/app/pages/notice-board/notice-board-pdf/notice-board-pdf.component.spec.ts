import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardPdfComponent } from './notice-board-pdf.component';

describe('NoticeBoardPdfComponent', () => {
  let component: NoticeBoardPdfComponent;
  let fixture: ComponentFixture<NoticeBoardPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeBoardPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeBoardPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
