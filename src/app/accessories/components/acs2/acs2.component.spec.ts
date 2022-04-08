import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acs2Component } from './acs2.component';

describe('Acs2Component', () => {
  let component: Acs2Component;
  let fixture: ComponentFixture<Acs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
