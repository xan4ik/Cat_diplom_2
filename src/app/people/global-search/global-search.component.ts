import { Component, OnInit } from '@angular/core';
import { CompetanceService } from 'src/app/Services/CompetanceService';
import { ProfileService } from 'src/app/Services/ProfileService';
import { Profile } from 'src/app/profile/profile';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
  providers: [CompetanceService]
})
export class GlobalSearchComponent  implements OnInit {
  isPeopleNear: boolean;
  isSubscription: boolean;
  competances: string[];
  peopleNear: Profile[];
  subscribers: Profile[];
  subscriptions: Profile[];

  constructor(
    private competanceService: CompetanceService,
    private profileService: ProfileService) 
  {
    this.isPeopleNear = true;
    this.isSubscription = true;
    this.competances = [];
    this.peopleNear = [];
    this.subscribers =[];
    this.subscriptions =[];
  }

  ngOnInit() {
    this.peopleNear = this.profileService.getPeopleNear();
    this.competances = this.competanceService.getAllCompetence();
    this.subscribers = this.profileService.getSubscribers();
    this.subscriptions = this.profileService.getSubscriptions();
  }

  onToggleSearchChange(value: boolean){
    this.isPeopleNear = value;
  }

  onTogglePeopleChange(value: boolean){
    this.isSubscription = value;
  }

  searchbarInput(value: string){
    console.log(value);
  }

}
