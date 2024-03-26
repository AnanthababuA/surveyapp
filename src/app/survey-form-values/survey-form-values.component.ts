import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-form-values',
  templateUrl: './survey-form-values.component.html',
  styleUrls: ['./survey-form-values.component.css']
})
export class SurveyFormValuesComponent implements OnInit {

  choice_type = {
    "shortanswer": "Short Answer",
    "paragraph": "Paragraph",
    "radio": "Multiple Choice",
    "Checkbox": "Checkboxs",
    // "boolean": "True/False"
  };

  selectedChoiceType: string | undefined;
  shortAnswerText: string | undefined;

  survey_forms: any;

  questions: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.survey_forms = {
      title: "Enter your title",
      
    };

    console.log("ch", this.selectedChoiceType)
  }



  onTitleChange(event: any) {
    // Update survey_forms.title with the text content of the <h2> element
    this.survey_forms.title = event.target.textContent;
  }

  onQuestionTextChange(event: any, question: any) {
    // Update the question text in your data model
    question.Q_Text = event.target.textContent;
  }

  addQuestion() {
    // Create a new question object and push it to the questions array
    const newQuestion = {
      Q_n: this.questions.length + 1, // Auto-increment question number
      Q_text: "Enter question text",
      Q_type: "MCQ", // Default question type
      Q_choices: [], // Initialize an empty array for question choices
      ans_required: "yes" // Default answer requirement
    };
    this.questions.push(newQuestion);
  }

  // addChoice(question: any) {
  //   // Add a new choice to the specified question's choices array
  //   question.Q_choices.push({ ch_id: question.Q_choices.length + 1, ch_text: "Enter choice text", ch_type: "text" });
  // }
  addChoiceWithType(choiceType: string) {
    this.selectedChoiceType = choiceType;

    console.log("ch", choiceType)

    this.questions.forEach(question => {
      question.Q_choices.push({
        ch_id: question.Q_choices.length + 1,
        ch_text: "Enter choice text",
        ch_type: choiceType
      });
    });
  }

  addChoiceWithType1(choiceType: string) {
    this.selectedChoiceType = choiceType;

    console.log('selected choice type', this.selectedChoiceType)
  }

  onChoiceTextChange(event: any, question: any, index: number) {
    // Handle the text change for the choice
    console.log("choice text", question, index)
    question.Q_choices[index].ch_text = event.target.textContent.trim();
  }


  addOption(questionId: number) {
    const question = this.questions.find(q => q.id === questionId);
    // if (question) {
    //   const newOption: MCQOption = {
    //     id: question.options.length + 1,
    //     optionText: '',
    //     isCorrect: false
    //   };
    //   question.options.push(newOption);
    // }
  }

  deleteOption(questionId: number, optionId: number) {
    const question = this.questions.find(q => q.id === questionId);
    // if (question) {
    //   question.options = question.options.filter(option => option.id !== optionId);
    // }
  }

  addChoice(question: any) {
    console.log("que choice", question);
    const newChoice = {
      ch_id: question.Q_choices.length + 1,
      ch_text: "Enter choice text",
      ch_type: question.selectedChoiceType,
      enabled: false  // Initially, the new choice is disabled
    };
    question.Q_choices.push(newChoice);
}

toggleChoiceEnabled(question: any, index: number) {
    question.Q_choices[index].enabled = !question.Q_choices[index].enabled;
}

}
