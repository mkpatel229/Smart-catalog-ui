import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { ServiceDetailComponent } from './view/service-detail/service-detail.component';
import { UserformComponent } from './view/userform/userform.component';


const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'detail/:id', component: ServiceDetailComponent },
  { path: 'userform', component:UserformComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
