import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acs1Component } from './acs1.component';

describe('Acs1Component', () => {
  let component: Acs1Component;
  let fixture: ComponentFixture<Acs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
