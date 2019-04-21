import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbjComparionChartComponent } from './bbj-comparion-chart.component';

describe('BbjComparionChartComponent', () => {
  let component: BbjComparionChartComponent;
  let fixture: ComponentFixture<BbjComparionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbjComparionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbjComparionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
