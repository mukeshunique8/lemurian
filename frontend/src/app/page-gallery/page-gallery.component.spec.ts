import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGalleryComponent } from './page-gallery.component';

describe('PageGalleryComponent', () => {
  let component: PageGalleryComponent;
  let fixture: ComponentFixture<PageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
