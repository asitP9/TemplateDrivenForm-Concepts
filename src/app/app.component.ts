import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted:boolean=false;
  genders:string[]=["Male","Female"];
  defaultGender:string=this.genders[1];
  @ViewChild('f',{static:true}) signUpForm:NgForm;
  defaultQuestion:string="teacher";
  questionAnswer:string;
  outputFormDetails={
    username:"",
    email:"",
    secretQuestion:"",
    answer:"",
    gender:""
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'asit.p9@gmail.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'My name is anthony gonsalves',
    //   gender:this.genders[0]
    // })

    // OR

    // this.signUpForm.form.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'asit.p9@gmail.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'My name is anthony gonsalves',
    //   gender:this.genders[0]
    // })

    this.signUpForm.form.patchValue({
      userData:{
        username:suggestedName        
      },
     
    })

  }

  // submitForm(formElement:NgForm){
  //   console.log(formElement);
  // }

  submitForm(){
    this.submitted=true;
      console.log(this.signUpForm);

      this.outputFormDetails.username=this.signUpForm.value.userData.username;
      this.outputFormDetails.email=this.signUpForm.value.userData.email;
      this.outputFormDetails.secretQuestion=this.signUpForm.value.secret;
      this.outputFormDetails.answer=this.signUpForm.value.questionAnswer;
      this.outputFormDetails.gender=this.signUpForm.value.gender;
    }
}
