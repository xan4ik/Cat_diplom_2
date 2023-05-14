import { Component, OnInit } from '@angular/core';
import { Profile, ProfileWork } from '../profile';
import { ProfileService } from '../../Services/ProfileService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent  implements OnInit {

  private profileID: number;
  profile : Profile | undefined;
  isSelfProfile: boolean;

  constructor(
    private service: ProfileService, 
    private route: ActivatedRoute,
    private router: Router) 
  {
    const fromRoute = route.snapshot.params["id"];
    if(fromRoute){
      this.profileID = fromRoute;
      this.isSelfProfile = false;
    }
    else{
      this.profileID = Number.parseInt(localStorage.getItem("userId")!);
      this.isSelfProfile = true;
    }
  }

  ngOnInit() {
    this.profile = this.service.getProfileById(this.profileID);
  }

  goToSettings(){
    this.router.navigate([`/main/profiles/profile/${this.profileID}/settings`]);
  }

  getShortDateString(date: Date | undefined, returnEmptyOnUndefined: boolean = true){
    if(returnEmptyOnUndefined && !date)
      return "";

    const month = date ?  date.toLocaleString('ru-RU', {month: 'long'}) : 'настоящее время'
    const year = date ? date.getFullYear() : "";

    return `${month} ${year}`;
  }

  getDateString(work: ProfileWork): string{

    const from = this.getShortDateString(work.from);
    const to = this.getShortDateString(work.to, false);

    return `${from} - ${to}`;
  }

  solvoSubscription(){
    if(!this.profile){
      return;
    }

    if(this.service.isCurrentUserSubsriberOf(this.profile.id)){
      this.service.usSubsribeCurrentUserTo(this.profile.id);
      console.log("unsubscribe");
    }
    else{
      this.service.subsribeCurrentUserTo(this.profile.id);
      console.log("subscribe");
    }
  }
}
