import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeObservableComponent } from './practice-observable.component';

describe('PracticeObservableComponent', () => {
  let component: PracticeObservableComponent;
  let fixture: ComponentFixture<PracticeObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
