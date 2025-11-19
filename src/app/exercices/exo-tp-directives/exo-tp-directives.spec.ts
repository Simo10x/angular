import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoTpDirectives } from './exo-tp-directives';

describe('ExoTpDirectives', () => {
  let component: ExoTpDirectives;
  let fixture: ComponentFixture<ExoTpDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoTpDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoTpDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
