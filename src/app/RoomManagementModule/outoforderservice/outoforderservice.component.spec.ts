import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutoforderserviceComponent } from './outoforderservice.component';

describe('OutoforderserviceComponent', () => {
  let component: OutoforderserviceComponent;
  let fixture: ComponentFixture<OutoforderserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutoforderserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutoforderserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
