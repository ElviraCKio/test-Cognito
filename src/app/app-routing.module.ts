import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'login' },
  {path: 'login', component:LoginComponent },
  {path: 'sign-up', component: SingUpComponent },
  {path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
