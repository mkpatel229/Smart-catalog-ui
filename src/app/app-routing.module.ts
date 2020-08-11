import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { ServiceListViewComponent } from './view/service-list-view/service-list-view.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { ServiceDetailComponent } from './view/service-detail/service-detail.component';
import { UserformComponent } from './view/userform/userform.component';
import { TemplateListViewComponent } from './view/template-list-view/template-list-view.component';
import { TemplateDetailComponent } from './view/template-detail/template-detail.component';
import { CreateTemplateComponent } from './view/create-template/create-template.component';
import { CombinationtemplateComponent } from './view/combinationtemplate/combinationtemplate.component';



const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'serviceList', component: ServiceListViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'userform', component:UserformComponent },
  { path: 'service/detail/:id', component: ServiceDetailComponent },
  { path: 'templates', component: TemplateListViewComponent },
  { path: 'ApprovedTemplates', component: TemplateListViewComponent },
  { path: 'TopTemplates', component: TemplateListViewComponent }, 
  { path: 'template/detail/:id', component: TemplateDetailComponent },
  { path: 'cart', component: CreateTemplateComponent},
  {path:'combination',component:CombinationtemplateComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
