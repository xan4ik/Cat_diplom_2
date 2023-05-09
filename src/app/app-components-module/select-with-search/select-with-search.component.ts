import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';


export interface ISelectItem{
  value: string;
  id: number;
}


@Component({
  selector: 'app-select-with-search',
  templateUrl: './select-with-search.component.html',
  styleUrls: ['./select-with-search.component.scss'],
})

export class SelectWithSearchComponent implements OnInit{
  
  // private cities: string[] = ["Абакан", "Азов", "Александров", "Алексин", "Анапа", "Арзамас", "Армавир", "Архангельск",
  //   "Астрахань", "Ачинск", "Балашиха", "Барнаул", "Белгород", "Белогорск", "Бийск", "Благовещенск",
  //   "Брянск", "Великие Луки", "Великий Новгород", "Владивосток", "Владикавказ", "Владимир", "Волгоград", "Волжск",
  //   "Вологда", "Воркута", "Воронеж", "Воскресенск", "Выборг", "Вязьма", "Геленджик", "Горно-Алтайск",
  //   "Грозный", "Гусь-Хрустальный", "Дзержинск", "Дмитров", "Долгопрудный", "Домодедово", "Дубна", "Евпатория",
  //   "Екатеринбург", "Ессентуки", "Жигулевск", "Зеленогорск", "Иваново", "Ижевск", "Иркутск", "Йошкар-Ола",
  //   "Казань", "Калининград", "Калуга", "Каспийск", "Кемерово", "Керчь", "Киров", "Кисловодск",
  //   "Клин", "Клинцы", "Коломна", "Комсомольск-на-Амуре", "Королев", "Кострома", "Котлас", "Красногорск",
  //   "Краснодар", "Краснокамск", "Красноярск", "Кузнецк", "Курган", "Курск", "Лениногорск", "Липецк",
  //   "Лобня", "Люберцы", "Магадан", "Магнитогорск", "Майкоп", "Махачкала", "Междуреченск", "Михайловск",
  //   "Мичуринск", "Москва", "Мурманск", "Муром", "Мытищи", "Набережные Челны", "Нальчик", "Находка",
  //   "Нефтекамск", "Нефтеюганск", "Нижневартовск", "Нижнекамск", "Нижний Новгород", "Нижний Тагил", "Новоалтайск", "Новокузнецк",
  //   "Новокуйбышевск", "Новороссийск", "Новосибирск", "Новоуральск", "Новочеркасск", "Новый Уренгой", "Норильск", "Обнинск",
  //   "Одинцово", "Озерск", "Омск", "Орел", "Оренбург", "Орехово-Зуево", "Орск", "Пенза", "Первоуральск",
  //   "Пермь", "Петрозаводск", "Петропавловск-Камчатский", "Подольск", "Прохладный", "Псков", "Пушкино", "Пятигорск",
  //   "Раменское", "Реутов", "Ржев", "Россошь", "Ростов-на-Дону", "Рыбинск", "Рязань", "Самара",
  //   "Санкт-Петербург", "Саранск", "Саратов", "Севастополь", "Северодвинск", "Сергиев Посад", "Серпухов", "Симферополь",
  //   "Смоленск", "Солнечногорск", "Сочи", "Ставрополь", "Старый Оскол", "Стерлитамак", "Сызрань", "Сыктывкар",
  //   "Таганрог", "Тамбов", "Тверь", "Тобольск", "Тольятти", "Томск", "Туапсе", "Тула", "Тюмень",
  //   "Улан-Удэ", "Ульяновск", "Уссурийск", "Уфа", "Ухта", "Феодосия", "Хабаровск", "Ханты-Мансийск",
  //   "Химки", "Чайковский", "Чебоксары", "Челябинск", "Череповец", "Черкесск", "Черногорск", "Чита", "Шадринск",
  //   "Щекино", "Щелково", "Электросталь", "Элиста", "Энгельс", "Южно-Сахалинск", "Якутск", "Ялта", "Ярославль"];  

  @Output() valueChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() items: any[] = [];
  @Input() multiple: boolean = false;
  @Input() showSelect : boolean = true;
  @Input() searchFunc: ((items: any[], filter: string) => any[])

  @ContentChild('itemView', { static: true }) itemView!: TemplateRef<any> | undefined;
  
  displayItems: any[] = [];
  selectedItems: any[] = [];

  constructor(){
    this.searchFunc = (items, filter) => {
      const values = items as string[];
      return values.filter(item => {
        return item.toLowerCase().includes(filter);
      });
    }
  }

  ngOnInit(): void {
    this.displayItems = [...this.items];
  }

  isSelectedItem(item: any){
    return this.selectedItems.indexOf(item) > -1; 
  }

  selectItem(item: any){
    if(this.multiple){
      const inArray = this.selectedItems.indexOf(item);
      if(inArray > -1){
        this.selectedItems.splice(inArray, 1);
      }
      else{
        this.selectedItems.push(item)
      }
    }
    else{
      this.selectedItems = [item];
    }
    this.valueChange.emit(this.selectedItems);
  }

  searchbarInput(searchValue: string) {
    if (searchValue === undefined) {
      this.displayItems = [...this.items];
    } 
    else {
      const normalizedQuery = searchValue.toLowerCase(); 
      this.displayItems = this.searchFunc(this.items, normalizedQuery);
    }
  }
}
