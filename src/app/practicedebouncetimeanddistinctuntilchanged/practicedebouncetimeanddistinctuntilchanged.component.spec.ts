import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticedebouncetimeanddistinctuntilchangedComponent } from './practicedebouncetimeanddistinctuntilchanged.component';

describe('PracticedebouncetimeanddistinctuntilchangedComponent', () => {
  let component: PracticedebouncetimeanddistinctuntilchangedComponent;
  let fixture: ComponentFixture<PracticedebouncetimeanddistinctuntilchangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticedebouncetimeanddistinctuntilchangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticedebouncetimeanddistinctuntilchangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
