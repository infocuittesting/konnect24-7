import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomhistoryComponent } from './roomhistory.component';

describe('RoomhistoryComponent', () => {
  let component: RoomhistoryComponent;
  let fixture: ComponentFixture<RoomhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
