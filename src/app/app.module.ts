import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routingAppModule } from './modules/routing-app.module';
import { sharedModule } from './modules/shared.modules';
import { actionReducerMap } from './store/store-definitions';

 @NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    sharedModule,
    routingAppModule,
    StoreModule.forRoot(actionReducerMap)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
