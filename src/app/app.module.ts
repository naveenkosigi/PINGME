import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routingAppModule } from './modules/routing-app.module';
import { sharedModule } from './modules/shared.modules';

 @NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    sharedModule,
    routingAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
