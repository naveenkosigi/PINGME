import { CommonModule } from "@angular/common";
import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatClickDirective } from "../chat-click.directive";
import { ChatComponentComponent } from "../chat-component/chat-component.component";
import { ChatListViewComponent } from "../chat-list-view/chat-list-view.component";
import { MessageListViewComponent } from "../messagesAppModule/message-list-view/message-list-view.component";
import { MessagingComponentComponent } from "../messaging-component/messaging-component.component";
import { authenticationGuard } from "../services/canActivate-guard-service";

const routes:Routes=[
    {path:"",component:MessageListViewComponent,canActivate:[authenticationGuard]}
];


@NgModule({
    declarations:[
        MessageListViewComponent,
        ChatListViewComponent,
        ChatComponentComponent,
        MessagingComponentComponent,
        ChatClickDirective
    ],
    imports:[
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports:[

    ]
})

export class messagesAppModule{}
