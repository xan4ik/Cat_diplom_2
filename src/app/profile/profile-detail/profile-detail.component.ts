import { Component, OnInit } from '@angular/core';
import { Profile, ProfileWork } from '../profile';
import { ProfileService } from '../../Services/ProfileService';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageSize } from 'src/app/app-components-module/image-wrapper/image-wrapper.component';
import { PostView } from 'src/app/post/Post';
import { PostProveider } from 'src/app/Services/PostProveider';



@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent  implements OnInit {

  private profileID: number;
  profile : Profile | undefined;
  posts : PostView[] | undefined;
  isSelfProfile: boolean;

  SIZES = ImageSize;

  constructor(
    private profileService: ProfileService, 
    private postService: PostProveider,
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
    this.profile = this.profileService.getProfileById(this.profileID);
    if(this.profile)
      this.posts = this.postService.getPostsByProfileId(this.profileID);
  }

  goToSettings(){
    this.router.navigate([`/main/profiles/settings`]);
  }

  getShortDateString(date: Date | undefined, returnEmptyOnUndefined: boolean = true){
    if(returnEmptyOnUndefined && !date)
      return "";

    const month = date ?  date.toLocaleString('ru-RU', {month: 'long'}) : 'настоящее время'
    const year = date ? date.getFullYear() : "";

    return `${month} ${year}`;
  }

  getName(){
    if(this.isSelfProfile){
      return "Профиль";
    }
    else{
      return this.profile!.name.firstName + " " + this.profile!.name.secondName;
    }
  }

  getDateString(work: ProfileWork): string{

    const from = this.getShortDateString(work.from);
    const to = this.getShortDateString(work.to, false);

    return `${from} - ${to}`;
  }

  getPostBlockHeader(): string{
    if(this.isSelfProfile){
      return "Мои посты";
    }
    return "Посты пользователя";
  }

  isSubscribtion(){
    if(!this.profile){
      return;
    }
    
    return this.profileService.isCurrentUserSubsriberOf(this.profile.id);
  }

  solveSubscription(){
    if(!this.profile){
      return;
    }

    if(this.profileService.isCurrentUserSubsriberOf(this.profile.id)){
      this.profileService.usSubsribeCurrentUserTo(this.profile.id);
      console.log("unsubscribe");
    }
    else{
      this.profileService.subsribeCurrentUserTo(this.profile.id);
      console.log("subscribe");
    }
  }
}
