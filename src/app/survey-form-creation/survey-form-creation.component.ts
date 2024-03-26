import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-form-creation',
  templateUrl: './survey-form-creation.component.html',
  styleUrls: ['./survey-form-creation.component.css']
})
export class SurveyFormCreationComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }
  

  submit(){
    this.router.navigate(['survey']);
  }

}
