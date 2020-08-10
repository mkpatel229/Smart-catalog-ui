import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateListViewComponent } from './template-list-view.component';

describe('TemplateListViewComponent', () => {
  let component: TemplateListViewComponent;
  let fixture: ComponentFixture<TemplateListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
