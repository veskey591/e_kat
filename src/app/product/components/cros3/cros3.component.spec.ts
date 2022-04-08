import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cros3Component } from './cros3.component';

describe('Cros3Component', () => {
  let component: Cros3Component;
  let fixture: ComponentFixture<Cros3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cros3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cros3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
