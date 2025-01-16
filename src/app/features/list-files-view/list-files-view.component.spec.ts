import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilesViewComponent } from './list-files-view.component';

describe('ListFilesViewComponent', () => {
  let component: ListFilesViewComponent;
  let fixture: ComponentFixture<ListFilesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFilesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFilesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
