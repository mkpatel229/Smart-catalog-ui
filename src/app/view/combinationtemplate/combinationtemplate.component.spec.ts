import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationtemplateComponent } from './combinationtemplate.component';

describe('CombinationtemplateComponent', () => {
  let component: CombinationtemplateComponent;
  let fixture: ComponentFixture<CombinationtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinationtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
