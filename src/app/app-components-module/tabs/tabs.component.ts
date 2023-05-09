import { Component, OnInit } from '@angular/core';


export interface ITabItem{
  routeLink: string;
  defaultImage : string;
  activeImage : string;
} 

class TabItemProvider{
  getTabItems(): ITabItem[] {
    return [
      {
        routeLink: "/main",
        defaultImage: "/assets/input-icons/homePage.svg",
        activeImage: "/assets/input-icons/homePageActive.svg"
      },
      {
        routeLink: "/main/people",
        defaultImage: "/assets/input-icons/peoplePage.svg",
        activeImage: "/assets/input-icons/peoplePageActive.svg"
      },
      {
        routeLink: "",
        defaultImage: "/assets/input-icons/chatPage.svg",
        activeImage: "/assets/input-icons/chatPageActive.svg"
      },
      {
        routeLink: "",
        defaultImage: "/assets/input-icons/mapPage.svg",
        activeImage: "/assets/input-icons/mapPageActive.svg"
      },
      {
        routeLink: "profiles",
        defaultImage: "/assets/input-icons/people.svg",
        activeImage: "/assets/input-icons/profilePageActive.svg"
      }
    ]
  } 
}



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [TabItemProvider]
})
export class TabsComponent  implements OnInit {

  buttons : ITabItem[] | undefined;
  lastActive : ITabItem | undefined;

  constructor(private tabItemProvider: TabItemProvider) 
  {}

  ngOnInit() {
    this.buttons = this.tabItemProvider.getTabItems();
  }

  onItemSelect(item: ITabItem){
    this.lastActive = item;
  }
}
