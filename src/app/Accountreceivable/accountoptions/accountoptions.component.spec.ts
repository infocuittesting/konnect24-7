import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountoptionsComponent } from './accountoptions.component';

describe('AccountoptionsComponent', () => {
  let component: AccountoptionsComponent;
  let fixture: ComponentFixture<AccountoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
