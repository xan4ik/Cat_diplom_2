import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/ProfileService';


interface MapItem{
  title: string;
  type: string;
  score: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
})
export class MapPageComponent  implements OnInit {

  city: string = "";
  globalSearchString: string;
  places: string[];
  typesPlace: string[];
  
  open: boolean = false;
  showItem!: MapItem;
    
  constructor(private profileService: ProfileService){
    this.globalSearchString = '';
    this.places = ["Додо Пицца", "Вкусно и точка"];
    this.typesPlace = ["Кафе", "Ресторан", "Парк", "Кофейня", "Библиотека", "Коворкинг", "Анти-кафе", "Творческие пространства"];
  }
  
  ngOnInit(){
    this.city = this.profileService.getProfileById(this.profileService.getCurrentUserId())!.locale;
  }
  
  searchbarInput(value: string){
    this.globalSearchString = value;
    if(this.globalSearchString){
    // this.places = this.places.find(value)
    }
  }

  openModal(){
    
    this.open = true;
  }

  closeModal(){
    this.open = false;
  }

}