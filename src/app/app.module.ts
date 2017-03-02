import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {routing, appRoutingProviders} from './app.routing';
// import {AUTH_PROVIDERS} from 'angular2-jwt';


import { AppComponent } from './app.component';
import { HardDriveComponent } from './components/hard-drive/hard-drive.component';
import { MonitoriComponent } from './components/monitori/monitori.component';
import {HomeComponent} from './components/home/home.component';

import {LoopbackComponent} from './loop-back.component';


import {Auth} from './components/services/auth.service';
import { AppRoutingModule }     from './app.routing';

@NgModule({
  declarations: [
    AppComponent,HardDriveComponent,MonitoriComponent, HomeComponent, LoopbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ Auth],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

