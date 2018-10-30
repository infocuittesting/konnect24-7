import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmaintenanceComponent } from './accountmaintenance.component';

describe('AccountmaintenanceComponent', () => {
  let component: AccountmaintenanceComponent;
  let fixture: ComponentFixture<AccountmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
