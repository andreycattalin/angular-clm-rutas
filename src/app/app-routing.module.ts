import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { LandingComponent } from './landing/landing.component';
import { PostDetailComponent } from './dashboard/post-detail/post-detail.component';

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, children:
    [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "posts", component: PostsComponent },
      { path: "posts/:id", component: PostDetailComponent },
      { path: "settings", component: SettingsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
