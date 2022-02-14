import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RoutingComponent} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule}from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RoutingComponent,
    HomeComponent,
    DetailComponent,
    ViewComponent,
    DeleteComponent,
    UpdateComponent,
    CreateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    Ng2OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
