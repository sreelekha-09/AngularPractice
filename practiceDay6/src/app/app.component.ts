import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { resolve } from 'dns';
import { Observable } from 'rxjs';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private fb:FormBuilder){}
  form:FormGroup;
  levels=['1','2','3'];
  ngOnInit(): void {
    this.form=this.fb.group({
      'userData':this.fb.group({
        'username':['',[Validators.required,this.unAuthNames.bind(this)]],
        'email': ['',[Validators.required,Validators.email],this.unAuthEmail]
      }),
      'gender': ['male'],
      'smail':[''],
      'subscribe':[false],
      'password':[''],
      'confirmPassword':[''],
      'subjects':this.fb.array([]),
      'skills':this.fb.array([
        this.addSkillFormGroup()
      ])
    },{validator: PasswordValidator})
    // this.form=new FormGroup({
    //   'userData':new FormGroup({
    //     'username': new FormControl(null,[Validators.required,this.unAuthNames.bind(this)]),
    //   'email': new FormControl(null,[Validators.required,Validators.email],this.unAuthEmail)
    //   }),   
    //   'gender': new FormControl('male'),
    //   'subjects': new FormArray([])
    // })
    this.form.get('subscribe').valueChanges
    .subscribe((value)=>{
      const smail=this.form.get('smail');
      if(value)
      {
        smail.setValidators(Validators.required);
      }
      else{
        smail.clearValidators();
      }
      smail.updateValueAndValidity();
    })
  }
  onSubmit()
  {
    console.log(this.form);
  }

  onAddSubject()
  {
    let control=new FormControl(null,Validators.required);
    (<FormArray>this.form.get('subjects')).push(control);
  }
  title = 'practice6';
  genders = ['male', 'female'];
  unAuthUsernames=['a','harsha'];
  //form:FormGroup;

  unAuthNames(control:FormControl):{[s:string]:boolean}{
    if(this.unAuthUsernames.indexOf(control.value)!==-1)
    {
      return {'unAuth':true};
    }
    return null;
  }

  unAuthEmail(control:FormControl):Promise<any>|Observable<any>{
    let promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==='a@a.com')
        {
          resolve({'unAuthEmail':true});
        }
        else
        {
          resolve(null);
        }
      },3000);
    });
    return promise;
  }

  addSkillFormGroup():FormGroup{
    return this.fb.group({
      skillName:['',Validators.required],
      experience:['',Validators.required],
      proficiency:['',Validators.required]
    })
  }

  addSkill(){
    (<FormArray>this.form.get('skills')).push(this.addSkillFormGroup());
  }
}
