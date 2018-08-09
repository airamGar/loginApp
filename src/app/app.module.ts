import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';

import { AngularFireModule } from '../../node_modules/angularfire2';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';

// import { AngularFireModule } from 'angularFire2';
// import { AngularFireAuthModule } from 'angularFire2/auth';

import { environment } from '../environments/environment';

import {AuthService} from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    AdminUserComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
