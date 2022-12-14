import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStrategyButtonComponent } from './change-strategy-button.component';

describe('ChangeStrategyButtonComponent', () => {
  let component: ChangeStrategyButtonComponent;
  let fixture: ComponentFixture<ChangeStrategyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStrategyButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeStrategyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
