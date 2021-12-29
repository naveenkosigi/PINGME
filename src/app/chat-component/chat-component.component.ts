import { Component, Input, OnInit } from '@angular/core';
import { userModel } from '../type-definitions/authentication';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  @Input() user:userModel | any=undefined;
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.user);
  }

}
