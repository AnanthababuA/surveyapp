import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyFormCreationComponent } from './survey-form-creation/survey-form-creation.component';
import { SurveyFormValuesComponent } from './survey-form-values/survey-form-values.component';

const routes: Routes = [
  { path: '', component: SurveyFormCreationComponent },
  { path: 'survey', component: SurveyFormValuesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
