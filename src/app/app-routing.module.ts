import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Mgt01Component } from './mgt01/mgt01.component';
import { Mgt010100Component } from './mgt01/mgt010100/mgt010100.component';
import { Mgt010200Component } from './mgt01/mgt010200/mgt010200.component';
import { Mgt010300Component } from './mgt01/mgt010300/mgt010300.component';
import { Mgt010400Component } from './mgt01/mgt010400/mgt010400.component';
import { UnclockComponent } from './unclock/unclock.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'mgt01', component: Mgt01Component,
    children: [
      { path: 'mgt010100', component: Mgt010100Component },
      { path: 'mgt010200', component: Mgt010200Component },
      { path: 'mgt010300', component: Mgt010300Component },
      { path: 'mgt010400', component: Mgt010400Component }
    ]
  },
  { path: 'unclock', component: UnclockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
