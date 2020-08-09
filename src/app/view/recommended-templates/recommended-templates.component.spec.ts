import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedTemplatesComponent } from './recommended-templates.component';

describe('RecommendedTemplatesComponent', () => {
  let component: RecommendedTemplatesComponent;
  let fixture: ComponentFixture<RecommendedTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
