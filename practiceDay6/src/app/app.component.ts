import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.form=new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('male')
    })
  }
  onSubmit()
  {
    console.log(this.form);
  }
  title = 'practice6';
  genders = ['male', 'female'];
  form:FormGroup;
}
