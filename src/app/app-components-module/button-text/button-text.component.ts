import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.scss'],
})
export class ButtonTextComponent {

  @Input() name: string;
  @Output() buttonClick: EventEmitter<void>;

  constructor() 
  {
    this.buttonClick = new EventEmitter();
    this.name = "";
  }

  onClick(){
    this.buttonClick.emit();
  }
}
