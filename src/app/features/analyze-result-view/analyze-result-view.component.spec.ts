import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeResultViewComponent } from './analyze-result-view.component';

describe('AnalyzeResultViewComponent', () => {
  let component: AnalyzeResultViewComponent;
  let fixture: ComponentFixture<AnalyzeResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeResultViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzeResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
