import { LightningElement } from 'lwc';

export default class QuizAppLwc extends LightningElement {
    selected={} //for storing answers
    correctAnswers = 0 //to show the no. of correct answers
    isSubmitted = false //use to show the result.
    myQuestions=[
        {
            id : "Question1",
            question: "Which one of the following is not a template loop?",
            answers:{
                 a:"for:each",
                 b:"iterator",
                 c:"map loop"
            },
            correctAnswer : "c"
        },
        {
            id : "Question2",
            question : "Which of the file is invalid in LWC component folder?",
            answers : {
                a : ".svg",
                b : ".Apex",
                c : ".js"
            },
            correctAnswer : "b"
        },
        {
            id : "Question3",
            question : "Which if the following is not a directive?",
            answers : {
                a : "for:each",
                b : "if:true",
                c : "@track"
            },
            correctAnswer : "c"
        }
    ]

    changeHandler(event){
           const name = event.target.name
           const value = event.target.value
           //the above 2 line of code can be written as below
           //const{name, value} = event.target

           this.selected={...this.selected,[name]:value}
    }
    // practice this getter for this use the Quiz app video from salesforce troop time is 28.00 min on video
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
        //this.myQuestion.length will give the length of myQuestion array
        //Object.keys(this.selected).length will give the length of the object called selected.
    }

    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
                                'slds-text-color_success':'slds-text-color_error'}`
    }
    submitHandler(event){
        //Our quiz question are in form and form always reload after submit 
        //To prevent this default behaviour of form and prevent it from reloading 
        //use this event.PreventDefault() 
          event.preventDefault()
          let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
          this.correctAnswers = correct.length
          this.isSubmitted = true
         //here on myQuestions arry of obj we are calling the filter method provided by js itselt
         //item means we are picking every qeustion as item in a filter
         //Array.prototype.filter()
        //The filter() method creates a shallow copy of a portion of a given array, filtered down to just
         //elements from the given array that pass the test implemented by the provided function.
    }

    resetHandler(event){
               this.selected = {}
               this.correctAnswers = 0
               this.isSubmitted = false
               //here we are resting obj to null and variable to 0
    }         
}