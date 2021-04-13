import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PostDetailComponent } from './dashboard/post-detail/post-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      DashboardComponent,
      LandingComponent,
      PostsComponent,
      HomeComponent,
      SettingsComponent,
      PostDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
