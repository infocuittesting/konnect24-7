import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RominglistComponent } from './rominglist.component';

describe('RominglistComponent', () => {
  let component: RominglistComponent;
  let fixture: ComponentFixture<RominglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RominglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RominglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
