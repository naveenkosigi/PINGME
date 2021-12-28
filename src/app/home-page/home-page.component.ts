import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logIn } from '../store/action-dispatchers';
import { authenticationReducer, authState} from '../store/action-reducers';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  form:FormGroup;
  authObservable:Observable<authState>;
  constructor(private fireStoreAuth:AngularFireAuth,private store:Store<{authenticate:authState}>) { 
    this.form=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    });
    this.authObservable=this.store.select('authenticate');
  }

  ngOnInit(): void {
  }

 async onSave() : Promise<any>{
    if(this.form.valid){
      try{
        const email=this.form.get('email')?.value;
        const password=this.form.get('password')?.value;

        await this.fireStoreAuth.signInWithEmailAndPassword(email,password);
        this.store.dispatch(new logIn());
        this.authObservable.subscribe((auth:authState) => {
          console.log(auth);
        })
      }
      catch(e){
        alert("Verify your username/password");
      }
      
    }
  }
}
