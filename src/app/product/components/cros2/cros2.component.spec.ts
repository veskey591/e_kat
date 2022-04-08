import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cros2Component } from './cros2.component';

describe('Cros2Component', () => {
  let component: Cros2Component;
  let fixture: ComponentFixture<Cros2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cros2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cros2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
