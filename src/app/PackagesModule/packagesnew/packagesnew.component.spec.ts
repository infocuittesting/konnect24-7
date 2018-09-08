import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesnewComponent } from './packagesnew.component';

describe('PackagesnewComponent', () => {
  let component: PackagesnewComponent;
  let fixture: ComponentFixture<PackagesnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
