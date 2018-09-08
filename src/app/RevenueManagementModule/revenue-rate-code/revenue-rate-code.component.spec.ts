import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueRateCodeComponent } from './revenue-rate-code.component';

describe('RevenueRateCodeComponent', () => {
  let component: RevenueRateCodeComponent;
  let fixture: ComponentFixture<RevenueRateCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueRateCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueRateCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
