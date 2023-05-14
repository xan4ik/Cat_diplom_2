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
      imageSource: "/assets/PeopleImg/kotova.jpg",
      locale: "Москва",
      links: [
          { source: "VK", value: "id_catMary" },
          { source: "Telegram", value: "@catMary" }
      ],
      works: [
          {
              place: "Институт водных проблем Российской академии наук, гидролог",
              from: new Date("2017-09-01"),
              to: undefined
          },
          {
              place: "ООО Центр Молекулярных Исследований, химик-органик",
              from: new Date("2015-06-01"),
              to: new Date("2017-08-01")
          }
      ],
      portfolio: [{
          source: "Статья 'Биохимический мониторинг прибрежных вод черного моря'",
          date: new Date("2017-12-01")
      }],
      login: "kotova",
      password: "1234",
      competances: ["Гидрохимия", "Гидрология"],
      subscribersId: [1, 2, 3],
      subscriptionsId: [1, 3, 5],
  },
  {
      id: 1,
      name: {
          firstName: "Владимир",
          secondName: "Рубов",
          fathersName: "Ильич"
      },
      phone: "8 (995)635-48-12",
      email: "rubovVI@gmail.com",
      imageSource: "/assets/PeopleImg/rubov.jpg",
      locale: "Москва",
      links: [
          { source: "VK", value: "id_rubovVI" },
          { source: "Telegram", value: "@rubovVI" }
      ],
      works: [
          {
              place: "WAZZUP, инженер по машинному обучению (NLP)",
              from: new Date("2021-01-01"),
              to: undefined
          },
          {
              place: "ООО Наследие Диджитл, инженер по машинному обучению",
              from: new Date("2018-06-01"),
              to: new Date("2020-12-01")
          }
      ],
      portfolio: [{
          source: "Ссылка на git: https://github.com/huggingface/transformers.git",
          date: undefined
      }],
      login: "rubov",
      password: "1234",
      competances: ["Python", "Машинное обучение"],
      subscribersId: [0, 2, 3],
      subscriptionsId: [4, 5, 2, 3, 0],
  },
  {
      id: 2,
      name: {
          firstName: "Максим",
          secondName: "Комаров",
          fathersName: "Тимурович"
      },
      phone: "8 (921)998-49-75",
      email: "komarov@gmail.com",
      imageSource: "/assets/PeopleImg/komarov.jpg",
      locale: "Дубна",
      links: [
          { source: "VK", value: "id_komarov" },
          { source: "Telegram", value: "@komarov" }
      ],
      works: [
          {
              place: "АО НПК Дедал, инженер слаботочных систем",
              from: new Date("2022-11-01"),
              to: undefined
          },
          {
              place: "ООО Акцентр Групп, инженер-электроник",
              from: new Date("2020-08-01"),
              to: new Date("2022-10-01")
          },
          {
              place: "YADRO, инженер по ремонту",
              from: new Date("2017-04-01"),
              to: new Date("2020-07-01")
          }
      ],
      portfolio: [],
      login: "komarov",
      password: "1234",
      competances: ["Электрика", "Электроника"],
      subscribersId: [0, 1, 3],
      subscriptionsId: [4, 5, 6, 3, 0],
  },
  {
      id: 3,
      name: {
          firstName: "Ева",
          secondName: "Дмитриева",
          fathersName: "Романовна"
      },
      phone: "8 (921)924-11-11",
      email: "evaLove@gmail.com",
      imageSource: "/assets/PeopleImg/eva.jpg",
      locale: "Дубна",
      links: [
          { source: "VK", value: "id_evaLove" },
          { source: "Telegram", value: "@evaLove" }
      ],
      works: [
          {
              place: "фриланс",
              from: new Date("2022-10-01"),
              to: undefined
          },
      ],
      portfolio: [{
          source: "Ссылка на behance: https://www.behance.net/thebrandingpeople",
          date: undefined
      }],
      login: "eva",
      password: "1234",
      competances: ["Графический дизайн", "Photoshop", "Illustrator"],
      subscribersId: [0, 1, 4, 5, 7],
      subscriptionsId: [4, 5, 6, 1, 0],
  },
  {
      id: 4,
      name: {
          firstName: "Софья",
          secondName: "Волкова",
          fathersName: "Романовна"
      },
      phone: "8 (926)324-71-65",
      email: "wolf@gmail.com",
      imageSource: "/assets/PeopleImg/wolf.jpg",
      locale: "Дубна",
      links: [
          { source: "VK", value: "id_wolf" },
          { source: "Telegram", value: "@wolf" }
      ],
      works: [],
      portfolio: [],
      login: "wolf",
      password: "1234",
      competances: ["Графический дизайн", "Photoshop", "Illustrator"],
      subscribersId: [0, 1, 3, 5, 7],
      subscriptionsId: [5, 1, 2],
  },
  {
      id: 5,
      name: {
          firstName: "Артём",
          secondName: "Соколов",
          fathersName: "Максимович"
      },
      phone: "8 (995)652-97-63",
      email: "sokol@gmail.com",
      imageSource: "/assets/PeopleImg/sokol.jpg",
      locale: "Сочи",
      links: [
          { source: "VK", value: "id_sokol" },
          { source: "Telegram", value: "@sokol" }
      ],
      works: [
          {
              place: "ООО Информационные системы, программист-разработчик Java",
              from: new Date("2016-01-01"),
              to: undefined
          }
      ],
      portfolio: [
          {
              source: "Статья 'Создаем свой Spring Boot Starter'",
              date: new Date("2023-03-01")
          },
          {
              source: "Статья 'Аннотации в Java. Как создать свою аннотацию'",
              date: new Date("2021-06-20")
          },
          {
              source: "Статья 'Документирование SpringBoot API с помощью Swagger'",
              date: new Date("2023-01-06")
          },
          {
              source: "Ссылка на приложение: https://wadline.ru/project/829",
              date: new Date("2022-09-01")
          },
      ],
      login: "sokol",
      password: "1234",
      competances: ["Java", "Мобильные приложения"],
      subscribersId: [3, 4, 6],
      subscriptionsId: [4, 6, 2, 3, 0],
  },
  {
      id: 6,
      name: {
          firstName: "Михаил",
          secondName: "Гущин",
          fathersName: "Дмитриевич"
      },
      phone: "8 (962)641-23-78",
      email: "mihaG@gmail.com",
      imageSource: "/assets/PeopleImg/gyschin.jpg",
      locale: "Санкт-Петербург",
      links: [
          { source: "VK", value: "id_mihaG" },
          { source: "Telegram", value: "@mihaG" }
      ],
      works: [],
      portfolio: [],
      login: "miha",
      password: "1234",
      competances: ["C#"],
      subscribersId: [3, 5, 7],
      subscriptionsId: [5, 1, 2],
  },
  {
      id: 7,
      name: {
          firstName: "Арсений",
          secondName: "Попов",
          fathersName: "Сергеевич"
      },
      phone: "8 (900)531-96-00",
      email: "arsPopov@gmail.com",
      imageSource: "/assets/PeopleImg/popov.jpg",
      locale: "Санкт-Петербург",
      links: [
          { source: "VK", value: "id_arsPopov" },
          { source: "Telegram", value: "@arsPopov" }
      ],
      works: 
      [
          {
              place: "Импровизаторы, актер импровизации",
              from: new Date("2023-03-01"),
              to: undefined
          },
          {
              place: "Импровизация, актер импровизации",
              from: new Date("2016-01-01"),
              to: new Date("2023-03-01")
          }
      ],
      portfolio: [],
      login: "popov",
      password: "1234",
      competances: ["Актерское мастерство", "Импровизация", "Ораторское искусство"],
      subscribersId: [8, 6],
      subscriptionsId: [8],
  },
  {
      id: 8,
      name: {
          firstName: "Антон",
          secondName: "Шастун",
          fathersName: "Андреевич"
      },
      phone: "8 (900)526-78-42",
      email: "shastun@gmail.com",
      imageSource: "/assets/PeopleImg/shastun.jpg",
      locale: "Воронеж",
      links: [
          { source: "VK", value: "id_shastun" },
          { source: "Telegram", value: "@shastun" }
      ],
      works: 
      [
          {
              place: "Импровизаторы, актер импровизации",
              from: new Date("2023-03-01"),
              to: undefined
          },
          {
              place: "Импровизация, актер импровизации",
              from: new Date("2016-01-01"),
              to: new Date("2023-03-01")
          }
      ],
      portfolio: [],
      login: "shastun",
      password: "1234",
      competances: ["Импровизация", "Юмор"],
      subscribersId: [7],
      subscriptionsId: [7, 6],
  },
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
    const newProfileId = Math.max(...this.profiles.map(x => x.id)) + 1;
    const newProfile : RegistrationModel={
      id: newProfileId,
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
