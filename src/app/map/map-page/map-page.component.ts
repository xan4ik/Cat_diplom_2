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
  //places: string[];
  typesPlace: string[];
  
  open: boolean = false;
  showItem: MapItem = {
    title: "Steak house Why Not bar",
    type: "",
    score: 4.7,
    image: "/assets/img/whyNot.png",
    description: 
    `Цены: выше среднего. Средний счёт: 1200–1500 рублей. 
    \nСпособ оплаты: наличными, оплата картой. 
    \nКухня: европейская, американская, итальянская, русская, английская. 
    \nТипы доставки: Delivery-club. 
    \nОсобенности: летняя веранда, крафтовое пиво, проектор, спортивные трансляции. 
    \nСпециальное меню: постное, сезонное, детское. 
    \nОсобенности заведения: меню на английском, бесплатная парковка, барная стойка, винная карта.`
  };
    
  constructor(private profileService: ProfileService){
    this.globalSearchString = '';
    //this.places = ["Додо Пицца", "Вкусно и точка"];
    this.typesPlace = ["Кафе", "Ресторан", "Парк", "Кофейня", "Библиотека", "Коворкинг", "Анти-кафе", "Творческие пространства"];
    this.showItem.type = this.typesPlace[1];
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