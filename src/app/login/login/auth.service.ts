import {Injectable} from '@angular/core';
import { ProfileService } from 'src/app/Services/ProfileService';
import { Profile } from 'src/app/profile/profile';
  
@Injectable({providedIn: 'root'})

export class AuthService{
   
    // public users: User[] = [new User(0, "Рубов", "Владимир", "Ильич", "/assets/input-icons/thisAkk.svg", "8(995)635-48-12", 
    //                                 "rubovVI@gmail.com", "id_rubovVI", "@rubovVI", "Москва", "rubov", "1234"),
    //                         new User(1, "Котова", "Мария", "Николаевна", "/assets/input-icons/kotova.svg", "8(955)685-98-46", 
    //                                 "kotova@gmail.com", "id_kotova", "@kotova", "Москва", "kotova", "1234")];

   constructor(private profileService: ProfileService){
   }

   public Login (login: string, password: string): Profile | undefined
   {
        var result = this.profileService.getProfileByLoginAndPassword(login, password);
        if(result)
        {
            localStorage.setItem("logined", "true");
            localStorage.setItem("userId", result.id.toString());
            return result;
        }
        return undefined;
   }

   public LogOut(): any
   {
        localStorage.removeItem("logined");
        localStorage.removeItem("userId");
        location.reload();
   }
}

// export class User
// {
//     id: number;
//     surname: string;
//     name: string;
//     patronymic: string;
//     avatar: string;
//     phone: string;
//     email: string;
//     vk: string;
//     telegram: string;
//     city: string;
//     login: string;
//     password: string;

//     constructor(id: number, surname: string, name: string, patronymic: string, avatar: string,
//                 phone: string, email: string, vk: string, telegram: string, city: string, login: string, password: string)
//     {
//         this.id = id;
//         this.surname = surname;
//         this.name = name;
//         this.patronymic = patronymic;
//         this.avatar = avatar;
//         this.phone =phone;
//         this.email = email;
//         this.vk = vk;
//         this.telegram = telegram;        
//         this.city = city;
//         this.login = login;
//         this.password = password;
//     }
//}