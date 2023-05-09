import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../../Services/ProfileService';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss'],
})
export class ProfilePreviewComponent  implements OnInit {

  @Input() profile!: Profile;

  ngOnInit() {
    // this.profile = {
    //   id:0,
    //   name:{
    //     firstName: "Мария",
    //     secondName: "Котова",
    //     fathersName: "Николаева"
    //   },
    //   phone: "8 (964)273-18-34",
    //   email: "catMary98@gmail.com",
    //   imageSource: "/assets/input-icons/kotova.svg",
    //   locale: "Дубна",
    //   links: [
    //     {source: "VK", value: "id_catMary"},
    //     {source: "Telegram", value: "@catMary"}
    //   ],
    //   portfolio: [],
    //   works: [],
    //   competances: ["python", "Котоврединие", "Аналитика больших данных"] // "Аналитика больших данных"
    // }
  }

  getFullName() : string{
    const name = this.profile.name;
    return `${name.secondName} ${name.firstName} ${name.fathersName}`;
  }
}
