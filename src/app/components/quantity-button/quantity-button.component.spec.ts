import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityButtonComponent } from './quantity-button.component';

describe('QuantityButtonComponent', () => {
  let component: QuantityButtonComponent;
  let fixture: ComponentFixture<QuantityButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
