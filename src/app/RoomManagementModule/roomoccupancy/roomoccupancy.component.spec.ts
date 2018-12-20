import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomoccupancyComponent } from './roomoccupancy.component';

describe('RoomoccupancyComponent', () => {
  let component: RoomoccupancyComponent;
  let fixture: ComponentFixture<RoomoccupancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomoccupancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomoccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
