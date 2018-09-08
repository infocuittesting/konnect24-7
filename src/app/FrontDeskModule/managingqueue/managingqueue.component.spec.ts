import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingqueueComponent } from './managingqueue.component';

describe('ManagingqueueComponent', () => {
  let component: ManagingqueueComponent;
  let fixture: ComponentFixture<ManagingqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
