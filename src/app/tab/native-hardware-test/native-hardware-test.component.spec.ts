import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeHardwareTestComponent } from './native-hardware-test.component';

describe('NativeHardwareTestComponent', () => {
  let component: NativeHardwareTestComponent;
  let fixture: ComponentFixture<NativeHardwareTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeHardwareTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeHardwareTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
