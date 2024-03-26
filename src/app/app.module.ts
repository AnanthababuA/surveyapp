import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { SurveyCreatorModule } from 'survey-creator-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyFormCreationComponent } from './survey-form-creation/survey-form-creation.component';
import { SurveyFormValuesComponent } from './survey-form-values/survey-form-values.component';
// import { FormioModule } from '@formio/angular';
// import { NgxSurveyModule } from '../../projects/ngx-surveys/src/lib'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormCreationComponent,
    SurveyFormValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //  NgxSurveyModule,
    MatFormFieldModule,MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule
    // FormioModule,
    // SurveyCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
