import { Component } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { Router} from '@angular/router';
import { AuthService } from './auth.service';
import { UrlStackService } from 'src/app/Services/UrlStackService';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  
  login: string = "";
  password: string = "";

  links: {source: string, link: string}[] =[
    {
      source: "/assets/input-icons/google.svg", 
      link: "#"
    },
    {
      source: "/assets/input-icons/vk.svg", 
      link: "#"
    },
    {
      source: "/assets/input-icons/facebook.svg", 
      link: "#"
    }
  ] 

  constructor(private router: Router,
     private auth: AuthService, 
     private alertController: AlertController)
  {
    UrlStackService.pushUrl("/login")
  }

  clickLogin()
  {
    console.log(this.login, this.password);
    var result = this.auth.Login(this.login, this.password);
    if(result)
    {
      this.router.navigateByUrl("/main");
    }
    else
    {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Ошибка ввода данных',
      message: 'Неверный логин или пароль',
      buttons: ['OK'],
    });

    await alert.present();
  }

  loginData(event: any)
  {
    this.login = event;
  }

  passwordData(event: any)
  {
    this.password = event;
  }
}
