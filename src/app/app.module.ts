import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UnclockComponent } from './unclock/unclock.component';
import { Mgt01Component } from './mgt01/mgt01.component';
import { Mgt010100Component } from './mgt01/mgt010100/mgt010100.component';
import { Mgt010200Component } from './mgt01/mgt010200/mgt010200.component';
import { Mgt010300Component } from './mgt01/mgt010300/mgt010300.component';
import { Mgt010400Component } from './mgt01/mgt010400/mgt010400.component';
import { ShareModule } from './share/share.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnclockComponent,
    Mgt01Component,
    Mgt010100Component,
    Mgt010200Component,
    Mgt010300Component,
    Mgt010400Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
