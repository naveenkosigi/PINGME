import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { userModel } from '../type-definitions/authentication';

@Component({
  selector: 'app-chat-list-view',
  templateUrl: './chat-list-view.component.html',
  styleUrls: ['./chat-list-view.component.css']
})
export class ChatListViewComponent implements OnInit {

  usersCollectionObservable:Observable<any>;
  usersCollection:userModel[]=[];
  constructor(private fireStore:AngularFirestore) { 
    
    this.usersCollectionObservable=this.fireStore.collection("users").snapshotChanges();
  }

  ngOnInit(): void {
    this.usersCollectionObservable.subscribe((docs) => {
      docs.forEach((doc:any) => {
        this.usersCollection.push(new userModel(
          doc.payload.doc.id,
          doc.payload.doc.data().name,
          ""
        ));
      });
    });
  }

}
