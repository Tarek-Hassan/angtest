import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',component: HomeComponent,
  },
  { path: 'auth', component: AuthComponent },
  {
    path: 'posts',component: PostsComponent,
  },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
