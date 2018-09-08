import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoliohistoryComponent } from './foliohistory.component';

describe('FoliohistoryComponent', () => {
  let component: FoliohistoryComponent;
  let fixture: ComponentFixture<FoliohistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoliohistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoliohistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
