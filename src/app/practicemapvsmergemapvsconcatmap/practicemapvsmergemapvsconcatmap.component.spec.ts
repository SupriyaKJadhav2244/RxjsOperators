import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticemapvsmergemapvsconcatmapComponent } from './practicemapvsmergemapvsconcatmap.component';

describe('PracticemapvsmergemapvsconcatmapComponent', () => {
  let component: PracticemapvsmergemapvsconcatmapComponent;
  let fixture: ComponentFixture<PracticemapvsmergemapvsconcatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticemapvsmergemapvsconcatmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticemapvsmergemapvsconcatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
