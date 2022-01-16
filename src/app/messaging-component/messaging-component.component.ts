import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { addMessage, addMessageStarted } from '../store/action-dispatchers';
import { chatState } from '../store/action-reducers';
import { appState } from '../store/store-definitions';
import { chatModel } from '../type-definitions/authentication';

@Component({
  selector: 'app-messaging-component',
  templateUrl: './messaging-component.component.html',
  styleUrls: ['./messaging-component.component.css']
})
export class MessagingComponentComponent implements OnInit,OnDestroy,AfterViewInit {

  private chatObservable:Observable<chatState>;
  private chatSubscription:Subscription=new Subscription();
  public chats:chatModel[]=[];
  public fromUser:String="";
  private currentLoggedInuser : string | undefined;
  private mutationObserver:MutationObserver | undefined;
  @ViewChild('threadContainer') threadContainer: ElementRef | undefined;
  @ViewChild('messageContent') messageContent : ElementRef;
  constructor(private store:Store<appState>,private fireStoreAuth:AngularFireAuth) { 
    this.chatObservable=this.store.select('chat');
  }

  async ngOnInit(): Promise<void> {
    this.chatSubscription=this.chatObservable.subscribe((data : chatState) => {
      console.log(data);
      if(data.currentUser !== null){
        this.chats=<chatModel[]>data.chats[data.currentUser];
        this.fromUser=data.currentUser;
      }
    });

    this.currentLoggedInuser=(await this.fireStoreAuth.currentUser)?.uid;
    console.log(this.currentLoggedInuser);
  }

  ngOnDestroy(): void {
      this.chatSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
      const targetNode = this.threadContainer?.nativeElement;
      const config = { childList: true, subtree: true };

      this.mutationObserver=new MutationObserver(() => {
        const nodes=this.threadContainer?.nativeElement.querySelectorAll(".chat");
        const lastNode=nodes[nodes.length-1];
        if(lastNode){
          setTimeout(() => {
            lastNode.scrollIntoView({behavior : 'smooth'});
  
          }, 500);
        }
      });
      this.mutationObserver.observe(targetNode,config);
  }

  addMessage(){
    const value=(this.messageContent.nativeElement as HTMLInputElement).value;
    if((<string>this.currentLoggedInuser)?.length>0 && this.fromUser.length>0){
      this.store.dispatch(new addMessageStarted(
        new chatModel(value,<string>this.currentLoggedInuser,<string>this.fromUser,new Date())
      ));
    }
  }
}
