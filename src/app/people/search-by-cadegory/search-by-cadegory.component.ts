import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/Services/ProfileService';
import { Profile } from 'src/app/profile/profile';

@Component({
  selector: 'app-search-by-cadegory',
  templateUrl: './search-by-cadegory.component.html',
  styleUrls: ['./search-by-cadegory.component.scss'],
})
export class SearchByCadegoryComponent  implements OnInit {

  people: Profile[];
  competance: string;

  constructor(
    private profileService: ProfileService, 
    private route: ActivatedRoute)
  {
    this.competance = route.snapshot.params['competance'];
    this.people = []
  }

  ngOnInit() {
    console.log(this.competance);
    this.people = this.profileService.getProfilesByCompetance(this.competance);
  }

  peopleSearchFunc(items: any[], filter: string): any[]{
    const people = items as Profile[];
    return people.filter( item => {
      const fullName = `${item.name.firstName}${item.name.secondName}${item.name.fathersName}`;
      return fullName.toLowerCase().includes(filter);
    });
  }

}
