import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormValuesComponent } from './survey-form-values.component';

describe('SurveyFormValuesComponent', () => {
  let component: SurveyFormValuesComponent;
  let fixture: ComponentFixture<SurveyFormValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFormValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyFormValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
