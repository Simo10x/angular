import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoTpBinding } from './exo-tp-binding';

describe('ExoTpBinding', () => {
  let component: ExoTpBinding;
  let fixture: ComponentFixture<ExoTpBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoTpBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoTpBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
