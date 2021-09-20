import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticetapComponent } from './practicetap.component';

describe('PracticetapComponent', () => {
  let component: PracticetapComponent;
  let fixture: ComponentFixture<PracticetapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticetapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticetapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
