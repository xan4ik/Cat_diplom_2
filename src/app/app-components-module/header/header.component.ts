import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UrlStackService } from 'src/app/Services/UrlStackService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent { 

  @Input() name: string;
  @Input() isHidden: boolean;
  @Input() imgEnd: string;
  @Input() useNav: boolean;

  @Output() leftClick: EventEmitter<void> = new EventEmitter();
  @Output() rightClick: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) 
  {
    this.name = "";
    this.imgEnd = "";
    this.isHidden = false;
    this.useNav = true;
  }

  onLeftClick(){
    if(this.useNav){
      const backUrl = UrlStackService.popLastUrl();
      if(backUrl){
        this.router.navigateByUrl(backUrl);
      } 
    }
    this.leftClick.emit();
  }

  onRightClick(){
    this.rightClick.emit();
  }
}
