import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloth3Component } from './cloth3.component';

describe('Cloth3Component', () => {
  let component: Cloth3Component;
  let fixture: ComponentFixture<Cloth3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cloth3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cloth3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
