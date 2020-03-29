import { async, TestBed } from '@angular/core/testing';
import { UiWebLayoutMaterialModule } from './ui-web-layout-material.module';

describe('UiWebLayoutMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiWebLayoutMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiWebLayoutMaterialModule).toBeDefined();
  });
});
