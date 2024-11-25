import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso2Page } from './curso2.page';

describe('Curso2Page', () => {
  let component: Curso2Page;
  let fixture: ComponentFixture<Curso2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
