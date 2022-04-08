import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloth2Component } from './cloth2.component';

describe('Cloth2Component', () => {
  let component: Cloth2Component;
  let fixture: ComponentFixture<Cloth2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cloth2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cloth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
