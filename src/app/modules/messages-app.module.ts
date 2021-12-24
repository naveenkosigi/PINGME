import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessageListViewComponent } from "../messagesAppModule/message-list-view/message-list-view.component";

const routes:Routes=[
    {path:"",component:MessageListViewComponent}
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
