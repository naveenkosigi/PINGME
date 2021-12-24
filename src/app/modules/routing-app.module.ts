import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { HomePageComponent } from "../home-page/home-page.component";

const routes:Routes=[
    {path : "",component:HomePageComponent},
    {path : "messages",loadChildren : () => import('./messages-app.module').then(module => {
        console.log(module);
        return module.messagesAppModule;
        })
    }    
];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class routingAppModule{}