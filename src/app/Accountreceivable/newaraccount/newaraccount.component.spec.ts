import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaraccountComponent } from './newaraccount.component';

describe('NewaraccountComponent', () => {
  let component: NewaraccountComponent;
  let fixture: ComponentFixture<NewaraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
