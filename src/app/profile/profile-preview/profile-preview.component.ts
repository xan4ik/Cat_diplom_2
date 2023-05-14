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
  @Input() small: boolean = true;

  ngOnInit() {  }

  getFullName() : string{
    const name = this.profile.name;
    return `${name.secondName} ${name.firstName} ${name.fathersName}`;
  }
}
