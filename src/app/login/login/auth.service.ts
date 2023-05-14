import {Injectable} from '@angular/core';
import { ProfileService } from 'src/app/Services/ProfileService';
import { Profile } from 'src/app/profile/profile';
  
@Injectable({providedIn: 'root'})

export class AuthService{
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