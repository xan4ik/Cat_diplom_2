import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { AppComponentsModuleModule } from '../app-components-module/app-components-module.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { RegistrationPage } from './registration/registration.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    AppComponentsModuleModule
  ],
  declarations: [LoginPage, RegistrationPage],
})
export class LoginModule { }
