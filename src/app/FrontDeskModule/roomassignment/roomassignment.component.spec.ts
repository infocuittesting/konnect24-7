import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomassignmentComponent } from './roomassignment.component';

describe('RoomassignmentComponent', () => {
  let component: RoomassignmentComponent;
  let fixture: ComponentFixture<RoomassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
