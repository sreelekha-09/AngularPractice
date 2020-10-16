import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceDay5';
  isSubmitted=false;
  defaultBranch='CSE';
  defaultQuestion='pet';
  answer="";
  genders=['male','female'];
  user={
    userName:"",
    email:"",
    gender:"",
    branch:"",
    secretQuestion:""
  }
  //@ViewChild('form') LogInform:NgForm;
  onLogin(form:NgForm)
  {
    this.isSubmitted=true;
    this.user.userName=form.value.userData.username;
    this.user.email=form.value.userData.email;
    this.user.gender=form.value.gender;
    this.user.branch=form.value.branch;
    this.user.secretQuestion=form.value.secretQuestion;
    form.resetForm();
  }
}
