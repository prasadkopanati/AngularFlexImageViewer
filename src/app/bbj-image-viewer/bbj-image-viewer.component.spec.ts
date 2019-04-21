import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbjImageViewerComponent } from './bbj-image-viewer.component';

describe('BbjImageViewerComponent', () => {
  let component: BbjImageViewerComponent;
  let fixture: ComponentFixture<BbjImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbjImageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbjImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
