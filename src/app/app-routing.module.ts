import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component'; 
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signin',component:DetailComponent,canActivate:[AuthGuard]},
  {path:'view',component:ViewComponent,canActivate:[AuthGuard]},
  {path:'delete',component:DeleteComponent,canActivate:[AuthGuard]},
  {path:'update',component:UpdateComponent,canActivate:[AuthGuard]},
  {path:'create',component:CreateComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent =[LoginComponent,HomeComponent,DetailComponent,ViewComponent,DeleteComponent,UpdateComponent,CreateComponent]
