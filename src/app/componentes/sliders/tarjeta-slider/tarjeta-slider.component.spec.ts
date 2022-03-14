import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSliderComponent } from './tarjeta-slider.component';

describe('TarjetaSliderComponent', () => {
  let component: TarjetaSliderComponent;
  let fixture: ComponentFixture<TarjetaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
