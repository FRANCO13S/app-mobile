import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso4Page } from './curso4.page';

describe('Curso4Page', () => {
  let component: Curso4Page;
  let fixture: ComponentFixture<Curso4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
