import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuemanagementComponent } from './revenuemanagement.component';

describe('RevenuemanagementComponent', () => {
  let component: RevenuemanagementComponent;
  let fixture: ComponentFixture<RevenuemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenuemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
