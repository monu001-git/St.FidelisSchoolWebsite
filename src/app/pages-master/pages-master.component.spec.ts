import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesMasterComponent } from './pages-master.component';

describe('PagesMasterComponent', () => {
  let component: PagesMasterComponent;
  let fixture: ComponentFixture<PagesMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
