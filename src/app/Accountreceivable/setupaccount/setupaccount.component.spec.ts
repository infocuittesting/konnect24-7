import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupaccountComponent } from './setupaccount.component';

describe('SetupaccountComponent', () => {
  let component: SetupaccountComponent;
  let fixture: ComponentFixture<SetupaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
