import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomconditionComponent } from './roomcondition.component';

describe('RoomconditionComponent', () => {
  let component: RoomconditionComponent;
  let fixture: ComponentFixture<RoomconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
