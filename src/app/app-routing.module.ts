import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminUserComponent} from './pages/admin-user/admin-user.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {NoFoundComponent} from './pages/no-found/no-found.component';
import {RegisterComponent} from './pages/register/register.component';

import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adminUser', component: AdminUserComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
