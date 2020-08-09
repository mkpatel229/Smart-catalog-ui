import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { ServiceListViewComponent } from './view/service-list-view/service-list-view.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { ServiceDetailComponent } from './view/service-detail/service-detail.component';
import { UserformComponent } from './view/userform/userform.component';
import { RecommendedTemplatesComponent } from './view/recommended-templates/recommended-templates.component';



const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'serviceList', component: ServiceListViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'userform', component:UserformComponent },
  { path: 'service/detail/:id', component: ServiceDetailComponent },
  { path: 'templates', component: RecommendedTemplatesComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
