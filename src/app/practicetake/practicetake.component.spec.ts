import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticetakeComponent } from './practicetake.component';

describe('PracticetakeComponent', () => {
  let component: PracticetakeComponent;
  let fixture: ComponentFixture<PracticetakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticetakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticetakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
