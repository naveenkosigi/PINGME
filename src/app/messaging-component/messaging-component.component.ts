import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { chatState } from '../store/action-reducers';
import { appState } from '../store/store-definitions';
import { chatModel } from '../type-definitions/authentication';

@Component({
  selector: 'app-messaging-component',
  templateUrl: './messaging-component.component.html',
  styleUrls: ['./messaging-component.component.css']
})
export class MessagingComponentComponent implements OnInit,OnDestroy {

  private chatObservable:Observable<chatState>;
  private chatSubscription:Subscription=new Subscription();
  public chats:chatModel[]=[];
  public fromUser:String="";
  constructor(private store:Store<appState>) { 
    this.chatObservable=this.store.select('chat');
  }

  ngOnInit(): void {
    this.chatSubscription=this.chatObservable.subscribe((data : chatState) => {
      console.log(data);
      if(data.currentUser !== null){
        this.chats=<chatModel[]>data.chats[data.currentUser];
        this.fromUser=data.currentUser;
      }
    });
  }

  ngOnDestroy(): void {
      this.chatSubscription.unsubscribe();
  }

}
