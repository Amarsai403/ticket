import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationTDFComponent } from './registation-tdf.component';

describe('RegistationTDFComponent', () => {
  let component: RegistationTDFComponent;
  let fixture: ComponentFixture<RegistationTDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistationTDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistationTDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
