import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { userService } from '../services/users-service';
import { userModel } from '../type-definitions/authentication';

@Component({
  selector: 'app-chat-list-view',
  templateUrl: './chat-list-view.component.html',
  styleUrls: ['./chat-list-view.component.css']
})
export class ChatListViewComponent implements OnInit {

  usersCollection:userModel[]=[];
  constructor(private fireStore:AngularFirestore,private usersService:userService) { 
    
  }

  ngOnInit(): void {
    this.usersService.getUsersCollection().then((data) => {
      this.usersCollection=data;
    });
    /*
    this.usersService.getUsersCollectionObservable().subscribe((docs) => {
      docs.forEach((doc:any) => {
        this.usersCollection.push(new userModel(
          doc.payload.doc.id,
          doc.payload.doc.data().name,
          doc.payload.doc.data().photo ? doc.payload.doc.data().photo : "" 
        ));
      });
    });
    */
  }

}
