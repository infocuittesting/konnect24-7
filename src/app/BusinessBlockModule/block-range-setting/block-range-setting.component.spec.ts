import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRangeSettingComponent } from './block-range-setting.component';

describe('BlockRangeSettingComponent', () => {
  let component: BlockRangeSettingComponent;
  let fixture: ComponentFixture<BlockRangeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockRangeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockRangeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
