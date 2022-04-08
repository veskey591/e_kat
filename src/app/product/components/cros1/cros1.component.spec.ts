import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cros1Component } from './cros1.component';

describe('Cros1Component', () => {
  let component: Cros1Component;
  let fixture: ComponentFixture<Cros1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cros1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cros1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
