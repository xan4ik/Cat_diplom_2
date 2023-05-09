import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent{

  @Input() left: string; 
  @Input() right: string; 
  @Input() isLeftSelected: boolean;

  @Output() valueChange : EventEmitter<boolean>; 


  constructor() {
    this.left = "";
    this.right = "";
    this.isLeftSelected = true;
    this.valueChange = new EventEmitter<boolean>();
  }

  switch(value: boolean){
    this.isLeftSelected = value;
    this.valueChange.emit(value);
  }
}
