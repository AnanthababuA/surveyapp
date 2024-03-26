import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormCreationComponent } from './survey-form-creation.component';

describe('SurveyFormCreationComponent', () => {
  let component: SurveyFormCreationComponent;
  let fixture: ComponentFixture<SurveyFormCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFormCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyFormCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
