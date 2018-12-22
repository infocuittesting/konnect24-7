import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndofdayComponent } from './endofday.component';

describe('EndofdayComponent', () => {
  let component: EndofdayComponent;
  let fixture: ComponentFixture<EndofdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndofdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndofdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
