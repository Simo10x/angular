import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoDynamicStylingNgClassNgStyle } from './exo-dynamic-styling-ng-class-ng-style';

describe('ExoDynamicStylingNgClassNgStyle', () => {
  let component: ExoDynamicStylingNgClassNgStyle;
  let fixture: ComponentFixture<ExoDynamicStylingNgClassNgStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoDynamicStylingNgClassNgStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoDynamicStylingNgClassNgStyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
