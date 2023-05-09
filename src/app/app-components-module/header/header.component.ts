import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent { 

  @Input() name: string;
  @Input() isHidden: boolean;
  @Input() imgEnd: string;

  @Output() leftClick: EventEmitter<void> = new EventEmitter();
  @Output() rightClick: EventEmitter<void> = new EventEmitter();

  constructor(public location: Location) 
  {
    this.name = "";
    this.isHidden = false;
    this.imgEnd = "";
  }

  onLeftClick(){
    this.leftClick.emit();
  }

  onRightClick(){
    this.rightClick.emit();
  }
}
