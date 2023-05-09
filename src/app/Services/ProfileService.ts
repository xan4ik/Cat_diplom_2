import { Injectable } from '@angular/core';
import { Profile, RegistrationModel as RegistrationModel } from '../profile/profile';
import { LoginModule } from '../login/login.module';

@Injectable({providedIn: 'root'})
export class ProfileService {
  private profiles: Profile[] = [
    {
      id: 0,
      name: {
        firstName: "Мария",
        secondName: "Котова",
        fathersName: "Николаева"
      },
      phone: "8 (964)273-18-34",
      email: "catMary98@gmail.com",
      imageSource: "/assets/input-icons/kotova.svg",
      locale: "Дубна",
      links: [
        { source: "VK", value: "id_catMary" },
        { source: "Telegram", value: "@catMary" }
      ],
      works: [
        {
          place: "Где-то",
          from: new Date(),
          to: undefined
        }
      ],
      portfolio: [{
        source: "Я тама учавствовал",
        date: new Date()
      }],
      login: "user0",
      password: "1234",
      competances: ["Python", "Аналитика больших данных"], // "Аналитика больших данных"
      subscribersId: [1],
      subscriptionsId: [1],
    },
    {
      id: 1,
      name: {
        firstName: "Михаил",
        secondName: "Петров",
        fathersName: "Николаева"
      },
      phone: "8 (964)273-18-34",
      email: "catMary98@gmail.com",
      imageSource: "/assets/input-icons/kotova.svg",
      locale: "Дубна",
      links: [
        { source: "VK", value: "id_catMary" },
        { source: "Telegram", value: "@catMary" },
        { source: "OK", value: "12314" }
      ],
      works: [],
      portfolio: [],
      login: "user1",
      password: "1234",
      competances: ["Python", "Котоврединие", "Java"],
      subscribersId: [],
      subscriptionsId: [], // "Аналитика больших данных"
    },
    {
      id: 2,
      name: {
        firstName: "stack",
        secondName: "Dubna",
        fathersName: "_"
      },
      phone: "8 (964)273-18-34",
      email: "catMary98@gmail.com",
      imageSource: "/assets/input-icons/kotova.svg",
      locale: "Дубна",
      links: [
        { source: "VK", value: "id_stack" },
      ],
      works: [],
      portfolio: [],
      login: "user2",
      password: "1234",
      competances: ["Python", "Котоврединие", "Аналитика больших данных"],
      subscribersId: [],
      subscriptionsId: [], // "Аналитика больших данных"
    }
  ];
 
 
 
  getTestProfle(): Profile {
    const profile = {
      id: 0,
      name: {
        firstName: "Мария",
        secondName: "Котова",
        fathersName: "Николаева"
      },
      phone: "8 (964)273-18-34",
      email: "catMary98@gmail.com",
      imageSource: "/assets/input-icons/kotova.svg",
      locale: "Дубна",
      links: [
        { source: "VK", value: "id_catMary" },
        { source: "Telegram", value: "@catMary" }
      ],
      works: [],
      portfolio: [],
      competances: ["Python", "Котоврединие", "Аналитика больших данных", "C#"], // "Аналитика больших данных"
      login: "test",
      password: "1234",
      subscribersId: [],
      subscriptionsId: [],
    };
    return profile;
  }

  getAllProfiles(): Profile[] {
    return this.profiles;
  }

  registerProfile(model: RegistrationModel){
    const newProfile: Profile ={
      id: model.id,
      login: model.login,
      password: model.password,
      name: model.name,
      imageSource: model.imageSource,
      phone: model.phone,
      email: model.email,
      locale: model.locale,
      competances: model.competances,
      portfolio: [],
      links: [],
      works: [],
      subscribersId: [],
      subscriptionsId: [],
    }

    this.profiles.push(newProfile);
  }



  createNewIntance() : RegistrationModel{
    const newProfile : RegistrationModel={
      id: Math.max(...this.profiles.map(x => x.id)),
      login: '',
      password: '',
      name: {
        firstName: '',
        secondName: '',
        fathersName: ''
      },
      imageSource: "https://w7.pngwing.com/pngs/993/672/png-transparent-computer-icons-font-awesome-user-font-awesome-miscellaneous-rectangle-black.png",
      phone: '',
      email: '',
      locale: '',
      competances: [],
    }

    return newProfile;
  }

  getProfileByLoginAndPassword(login: string, password: string): Profile | undefined{
    return this.profiles.find(x=> x.login === login && x.password === password); 
  }

  getCurrentUserId(): number{
    const fromStorage = localStorage.getItem("userId");
    if(fromStorage == null){
      throw new Error("Unauthorized user")
    }
    
    return Number.parseInt(fromStorage);
  }

  getProfilesByCompetance(competance: string) : Profile[] {
    const porfiles = this.getAllProfiles();
    return this.profiles.filter( x =>{
      for(let comp of x.competances){
        if(comp == competance){
          return true;
        }
      }
      return false
    })
  }

  getProfileById(id: number): Profile | undefined {
    return this.getAllProfiles().find(x => x.id == id);
  }

  getPeopleNear(): Profile[]{
    return this.getAllProfiles();
  }

  getSubscribers(): Profile[]{
    const currentProfileSubscribers = this.getProfileById(this.getCurrentUserId())!.subscribersId;
    return this.getProfilesByIds(currentProfileSubscribers);
  }

  getSubscriptions() : Profile[]{
    const currentProfileSubscribers = this.getProfileById(this.getCurrentUserId())!.subscriptionsId;
    return this.getProfilesByIds(currentProfileSubscribers);
  }

  isCurrentUserSubsriberOf(profileId: number): boolean{
    const currentUser = this.getProfileById(this.getCurrentUserId())!;
    return currentUser.subscriptionsId.indexOf(profileId) > -1;
  }

  subsribeCurrentUserTo(profileID: number): void{
    const currentUser = this.getProfileById(this.getCurrentUserId())!;
    currentUser.subscriptionsId.push(profileID);
  }

  usSubsribeCurrentUserTo(profileID: number){
    const currentUser = this.getProfileById(this.getCurrentUserId())!;
    currentUser.subscriptionsId.splice(currentUser.subscriptionsId.indexOf(profileID), 1);
  }


  private getProfilesByIds(ids: number[]){
    return this.getAllProfiles().filter(x=> ids.indexOf(x.id) > -1);
  } 

}
