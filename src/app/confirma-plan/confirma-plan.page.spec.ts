import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmaPlanPage } from './confirma-plan.page';

describe('ConfirmaPlanPage', () => {
  let component: ConfirmaPlanPage;
  let fixture: ComponentFixture<ConfirmaPlanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
