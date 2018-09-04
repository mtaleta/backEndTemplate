import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Mgt01Component } from './mgt01/mgt01.component';
import { Mgt010100Component } from './mgt01/mgt010100/mgt010100.component';
import { Mgt010200Component } from './mgt01/mgt010200/mgt010200.component';
import { Mgt010300Component } from './mgt01/mgt010300/mgt010300.component';
import { Mgt010400Component } from './mgt01/mgt010400/mgt010400.component';
import { UnclockComponent } from './unclock/unclock.component';
import { Mgt010402Component } from './mgt01/mgt010402/mgt010402.component';
import { Mgt010401Component } from './mgt01/mgt010401/mgt010401.component';
import { Mgt010301Component } from './mgt01/mgt010301/mgt010301.component';
import { Mgt010101Component } from './mgt01/mgt010101/mgt010101.component';
import { Mgt010102Component } from './mgt01/mgt010102/mgt010102.component';
import { Mgt010103Component } from './mgt01/mgt010103/mgt010103.component';
import { Mgt02Component } from './mgt02/mgt02.component';
import { MgtComponent } from './mgt/mgt.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'mgt01', component: Mgt01Component,
    children: [
      { path: 'mgt010100', component: Mgt010100Component },
      { path: 'mgt010101', component: Mgt010101Component },
      { path: 'mgt010102', component: Mgt010102Component },
      { path: 'mgt010103', component: Mgt010103Component },
      { path: 'mgt010200', component: Mgt010200Component },
      { path: 'mgt010300', component: Mgt010300Component },
      { path: 'mgt010301', component: Mgt010301Component },
      { path: 'mgt010400', component: Mgt010400Component },
      { path: 'mgt010401', component: Mgt010401Component },
      { path: 'mgt010402', component: Mgt010402Component },
    ]
  },
  { path: 'mgt', component: MgtComponent },
  { path: 'mgt02', component: Mgt02Component },
  { path: 'unclock', component: UnclockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
