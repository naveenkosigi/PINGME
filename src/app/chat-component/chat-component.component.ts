import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { chatService } from '../services/chat-service';
import { userModel } from '../type-definitions/authentication';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  @Input() user:userModel | null=null;
  constructor(private chatService:chatService) {

  }

  ngOnInit(): void {
    console.log(this.user);
  }

  showChat(){
    this.chatService.initChatStoreForUserId((<userModel>this.user)?.id);
  }

}
