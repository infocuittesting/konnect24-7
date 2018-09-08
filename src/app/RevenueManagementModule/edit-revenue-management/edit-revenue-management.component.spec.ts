import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRevenueManagementComponent } from './edit-revenue-management.component';

describe('EditRevenueManagementComponent', () => {
  let component: EditRevenueManagementComponent;
  let fixture: ComponentFixture<EditRevenueManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRevenueManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRevenueManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
