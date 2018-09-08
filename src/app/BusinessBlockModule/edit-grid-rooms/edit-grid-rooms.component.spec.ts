import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGridRoomsComponent } from './edit-grid-rooms.component';

describe('EditGridRoomsComponent', () => {
  let component: EditGridRoomsComponent;
  let fixture: ComponentFixture<EditGridRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGridRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGridRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
