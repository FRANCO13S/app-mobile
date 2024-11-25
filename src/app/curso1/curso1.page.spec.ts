import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso1Page } from './curso1.page';

describe('Curso1Page', () => {
  let component: Curso1Page;
  let fixture: ComponentFixture<Curso1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
