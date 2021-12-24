import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  form:FormGroup;
  constructor() { 
    this.form=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSave():void{
    if(this.form.valid){
      console.log(this.form);
    }
  }
}
