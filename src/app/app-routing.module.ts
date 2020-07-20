import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { LoginViewComponent } from './view/login-view/login-view.component';


const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
