import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomconfigurationComponent } from './roomconfiguration.component';

describe('RoomconfigurationComponent', () => {
  let component: RoomconfigurationComponent;
  let fixture: ComponentFixture<RoomconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
