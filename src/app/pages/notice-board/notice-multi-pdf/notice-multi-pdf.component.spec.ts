import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeMultiPdfComponent } from './notice-multi-pdf.component';

describe('NoticeMultiPdfComponent', () => {
  let component: NoticeMultiPdfComponent;
  let fixture: ComponentFixture<NoticeMultiPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeMultiPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeMultiPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
