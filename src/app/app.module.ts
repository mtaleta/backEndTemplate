import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UnclockComponent } from './unclock/unclock.component';
import { Mgt01Component } from './mgt01/mgt01.component';
import { Mgt010100Component } from './mgt01/mgt010100/mgt010100.component';
import { Mgt010200Component } from './mgt01/mgt010200/mgt010200.component';
import { Mgt010300Component } from './mgt01/mgt010300/mgt010300.component';
import { Mgt010400Component } from './mgt01/mgt010400/mgt010400.component';
import { Mgt010401Component } from './mgt01/mgt010401/mgt010401.component';
import { Mgt010402Component } from './mgt01/mgt010402/mgt010402.component';
import { Mgt010101Component } from './mgt01/mgt010101/mgt010101.component';
import { Mgt010102Component } from './mgt01/mgt010102/mgt010102.component';
import { Mgt010103Component } from './mgt01/mgt010103/mgt010103.component';
import { Mgt010301Component } from './mgt01/mgt010301/mgt010301.component';
import { AddDialog } from './mgt01/mgt010301/add-dialog.component';
import { SelectFunComponent } from './mgt01/mgt010301/select-fun/select-fun.component';
import { Mgt02Component } from './mgt02/mgt02.component';

import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpModule } from '@angular/http';
import { MgtComponent } from './mgt/mgt.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnclockComponent,
    Mgt01Component,
    Mgt010100Component,
    Mgt010200Component,
    Mgt010300Component,
    Mgt010400Component,
    Mgt010401Component,
    Mgt010402Component,
    Mgt010101Component,
    Mgt010102Component,
    Mgt010103Component,
    Mgt010301Component,
    Mgt02Component,
    AddDialog,
    SelectFunComponent,
    MgtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
