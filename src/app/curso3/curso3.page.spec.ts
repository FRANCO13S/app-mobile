import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso3Page } from './curso3.page';

describe('Curso3Page', () => {
  let component: Curso3Page;
  let fixture: ComponentFixture<Curso3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
