import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticemapComponent } from './practicemap.component';

describe('PracticemapComponent', () => {
  let component: PracticemapComponent;
  let fixture: ComponentFixture<PracticemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
