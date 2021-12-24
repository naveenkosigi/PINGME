import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  form:FormGroup;
  constructor(private fireStoreAuth:AngularFireAuth) { 
    this.form=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    });
  }

  ngOnInit(): void {
  }

 async onSave() : Promise<any>{
    if(this.form.valid){
      try{
        const email=this.form.get('email')?.value;
        const password=this.form.get('password')?.value;

        await this.fireStoreAuth.signInWithEmailAndPassword(email,password); console.log("logged in");
      }
      catch(e){
        alert("Verify your username/password");
      }
      
    }
  }
}
