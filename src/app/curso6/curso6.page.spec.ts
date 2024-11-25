import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso6Page } from './curso6.page';

describe('Curso6Page', () => {
  let component: Curso6Page;
  let fixture: ComponentFixture<Curso6Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
