import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserComponent } from './components/user/user.component';
import { GuardsGuard } from './core/guards.guard';
import { NotFoundComponent } from './shareds/not-found/not-found.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent, canActivate: [GuardsGuard]},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent}
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }