import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { handleErrorMessage } from '../common-functions';
import { authenticationService } from '../services/authentication-service';
import { logIn, logOut } from '../store/action-dispatchers';
import { authState} from '../store/action-reducers';
import { appState } from '../store/store-definitions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  form:FormGroup;
  authObservable:Observable<authState>;
  constructor(private fireStoreAuth:AngularFireAuth,private store:Store<appState>,private authenticationService:authenticationService,private router:Router) { 
    this.form=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    });
    this.authObservable=this.store.select('authenticate');
    fireStoreAuth.onAuthStateChanged((data) => {
      console.log(data);
    })
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
        });
        this.router.navigateByUrl("/home");
      }
      catch(e:any){
        handleErrorMessage(e.message);
        this.store.dispatch(new logOut());
      }
    }
  }
}
