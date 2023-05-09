import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RegistrationPage } from './registration/registration.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'registration',
    component: RegistrationPage
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
