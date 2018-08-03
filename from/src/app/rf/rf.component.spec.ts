import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFComponent } from './rf.component';

describe('RFComponent', () => {
  let component: RFComponent;
  let fixture: ComponentFixture<RFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
