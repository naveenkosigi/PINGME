import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessageListViewComponent } from "../messagesAppModule/message-list-view/message-list-view.component";
import { authenticationGuard } from "../services/canActivate-guard-service";

const routes:Routes=[
    {path:"",component:MessageListViewComponent,canActivate:[authenticationGuard]}
];


@NgModule({
    declarations:[
        MessageListViewComponent
    ],
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[

    ]
})

export class messagesAppModule{}
