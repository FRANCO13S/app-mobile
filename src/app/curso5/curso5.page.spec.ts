import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso5Page } from './curso5.page';

describe('Curso5Page', () => {
  let component: Curso5Page;
  let fixture: ComponentFixture<Curso5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
