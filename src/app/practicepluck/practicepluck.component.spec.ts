import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticepluckComponent } from './practicepluck.component';

describe('PracticepluckComponent', () => {
  let component: PracticepluckComponent;
  let fixture: ComponentFixture<PracticepluckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticepluckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticepluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
