import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestservicestatusComponent } from './guestservicestatus.component';

describe('GuestservicestatusComponent', () => {
  let component: GuestservicestatusComponent;
  let fixture: ComponentFixture<GuestservicestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestservicestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestservicestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
