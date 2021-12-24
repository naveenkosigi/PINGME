import { NgModule } from "@angular/core";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


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
   ]
})

export class sharedModule{}