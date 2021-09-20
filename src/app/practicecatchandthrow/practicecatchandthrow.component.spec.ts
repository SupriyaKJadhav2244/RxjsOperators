import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticecatchandthrowComponent } from './practicecatchandthrow.component';

describe('PracticecatchandthrowComponent', () => {
  let component: PracticecatchandthrowComponent;
  let fixture: ComponentFixture<PracticecatchandthrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticecatchandthrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticecatchandthrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
