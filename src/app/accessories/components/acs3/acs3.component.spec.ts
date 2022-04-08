import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acs3Component } from './acs3.component';

describe('Acs3Component', () => {
  let component: Acs3Component;
  let fixture: ComponentFixture<Acs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acs3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
