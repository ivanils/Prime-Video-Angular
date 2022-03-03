import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRegularComponent } from './slider-regular.component';

describe('SliderRegularComponent', () => {
  let component: SliderRegularComponent;
  let fixture: ComponentFixture<SliderRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderRegularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
