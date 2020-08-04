import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './view/home-view/card/card.component';
import { ServiceDetailComponent } from './view/service-detail/service-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CloudService } from './service/cloud.service';
import { RatingModule } from 'ng-starrating';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { UserformComponent } from './view/userform/userform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    LoginViewComponent,
    CardComponent,
    ServiceDetailComponent,
    RatingStarComponent,
    UserformComponent
  ],
  imports: [
    RatingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [CloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
