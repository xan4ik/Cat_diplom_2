import { Component, OnInit } from '@angular/core';
import { ISelectItem } from '../../app-components-module/select-with-search/select-with-search.component';
import { CitiesService } from '../../Services/CitiesService';
import { CompetanceService } from 'src/app/Services/CompetanceService';
import { RegistrationModel } from 'src/app/profile/profile';
import { ProfileService } from 'src/app/Services/ProfileService';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  providers: [CitiesService, CompetanceService]
})
export class RegistrationPage implements OnInit {

  cities: string[] = [];
  competance: string[] = [];

  registrationModel: RegistrationModel;

  private tempCity: string = "";
  private tempCompetances: string[] = [];

  constructor(
    private cityService: CitiesService, 
    private competanceService: CompetanceService,
    private profileService: ProfileService,
    private alertController: AlertController,
    private router: Router) 
  {
    this.registrationModel = profileService.createNewIntance();
  }

  ngOnInit() {
    this.cities = this.cityService.getAllCities();
    this.competance = this.competanceService.getAllCompetence();
  }

  async register(){
    const validationError = this.isInvalidModel()
    if(validationError){
      const alert = await this.alertController.create({
        subHeader: 'Не заполнены поля',
        message: validationError,
        buttons: ['OK'],
      });
  
      await alert.present();
      return;
    }

    this.profileService.registerProfile(this.registrationModel);
    this.router.navigateByUrl("/");
  }

  updateSurname(value: string){
    this.registrationModel.name.secondName = value;
  }

  updateName(value: string){
    this.registrationModel.name.firstName = value;
  }

  updateFatherName(value: string){
    this.registrationModel.name.fathersName = value;
  }

  updatePhone(value: string){
    this.registrationModel.phone = value;
  }

  updateLogin(value: string){
    this.registrationModel.login = value;
  }

  updatePassword(value: string){
    this.registrationModel.password = value;
  }

  cancelCity(){
    this.tempCity = "";
  }

  confirmCity(){
    this.registrationModel.locale = this.tempCity;
  }

  cityChange(value: string[]){
    if(value.length){
      this.tempCity = value[0];
    }
  }

  cancelCompetance(){
    this.tempCompetances = []
  }

  confirmCompetance(){
    this.registrationModel.competances = this.tempCompetances;
  }

  competanceChange(competances: string[]){
    this.tempCompetances = competances; 
  }

  removeCompetance(value: string){
    const valueIndex = this.registrationModel.competances.indexOf(value);
    this.registrationModel.competances.splice(valueIndex, 1);
  }

  private isInvalidModel(): string | undefined {
    let result = ""

    if(!this.registrationModel.name.firstName){
      result += "\n--'Имя' не задано" 
    }
    if(!this.registrationModel.name.secondName){
      result += "\n--'Фамилия' не задана" 
    }
    if(!this.registrationModel.name.fathersName){
      result += "\n--'Отчество' не задано" 
    }
    if(!this.registrationModel.login){
      result += "\n--'Логин' не задана" 
    }
    if(!this.registrationModel.password){
      result += "\n--'Пароль' не задана" 
    }
    if(!this.registrationModel.locale){
      result += "\n--'Местополжение' не задано" 
    }
    if(!this.registrationModel.phone){
      result += "\n--'Телефон' не задан" 
    }
    if(this.registrationModel.competances.length <= 0 || this.registrationModel.competances.length >3){
      result += "\n--'Компетенции' необходимо указать до 3 компетенций" 
    }
  
    return result === "" ? undefined : result;
  }
}




