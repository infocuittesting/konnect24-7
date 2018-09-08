import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquriprocessComponent } from './inquriprocess.component';

describe('InquriprocessComponent', () => {
  let component: InquriprocessComponent;
  let fixture: ComponentFixture<InquriprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquriprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquriprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
