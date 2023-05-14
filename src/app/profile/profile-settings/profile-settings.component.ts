import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/Services/ProfileService';
import { Profile } from '../profile';
import { CitiesService } from 'src/app/Services/CitiesService';
import { AuthService } from 'src/app/login/login/auth.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  providers: [CitiesService]
})
export class ProfileSettingsComponent  implements OnInit {
  profile : Profile | undefined;
  cities : string[] = []; 
  buttons : ButtonData[];

  constructor(
    private service: ProfileService,
    private cityService: CitiesService,
    private authService: AuthService) 
  {
      this.buttons = [
      {
        image: "/assets/input-icons/shield.svg",
        label: "Аккаунт",
        action: () => console.log("Account click") 
      },
      {
        image: "/assets/input-icons/profile.svg",
        label: "Личные данные",
        action: () => console.log("Profile click") 
      },
      {
        image: "/assets/input-icons/bell.svg",
        label: "Уведомления",
        action: () => console.log("bell click") 
      },
      {
        image: "/assets/input-icons/help.svg",
        label: "Помошь",
        action: () => console.log("help click") 
      },
      {
        image: "/assets/input-icons/exit.svg",
        label: "Выход",
        action: () => this.authService.LogOut() 
      }
    ];
  }
  
  ngOnInit() {
    this.cities = this.cityService.getAllCities();

    const isLoginned =localStorage.getItem("userId");
    if(isLoginned){
      const profileID =  Number.parseInt(isLoginned);
      this.profile = this.service.getProfileById(profileID);
    }
  }

  getFullName() : string{
    const name = this.profile!.name;
    return `${name.secondName} ${name.firstName} ${name.fathersName}`;
  }

  cityChange(value: any[]){
    
  }

  cancelCity(){

  }

  confirmCity(){
    
  }

}

interface ButtonData{
  image : string;
  label : string;
  action :  () => void;
}
