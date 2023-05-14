import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../../Services/ProfileService';
import { ImageSize } from 'src/app/app-components-module/image-wrapper/image-wrapper.component';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss'],
})
export class ProfilePreviewComponent  implements OnInit {

  @Input() profile!: Profile;
  @Input() size: ImageSize = ImageSize.Default;

  ngOnInit() {  }

  getFullName() : string{
    const name = this.profile.name;
    return `${name.secondName} ${name.firstName} ${name.fathersName}`;
  }
}
