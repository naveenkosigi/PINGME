import { NgModule } from "@angular/core";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { authenticationService } from "../services/authentication-service";
import { authenticationGuard } from "../services/canActivate-guard-service";
import { CommonModule } from "@angular/common";


@NgModule({
   imports:[
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
   ] ,
   exports:[
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
   ],
   providers:[authenticationService,authenticationGuard]
})

export class sharedModule{}