import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessBlockComponent } from './edit-business-block.component';

describe('EditBusinessBlockComponent', () => {
  let component: EditBusinessBlockComponent;
  let fixture: ComponentFixture<EditBusinessBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBusinessBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBusinessBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
