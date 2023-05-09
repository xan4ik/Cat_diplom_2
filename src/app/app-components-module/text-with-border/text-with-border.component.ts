import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-with-border',
  templateUrl: './text-with-border.component.html',
  styleUrls: ['./text-with-border.component.scss'],
})
export class TextWithBorderComponent {

  @Input() value: string;
  @Input() showCross: boolean;
  @Output() delete : EventEmitter<void> = new EventEmitter();

  constructor() {
    this.value = "";
    this.showCross = false;
  }

  crossClick(){
    this.delete.emit();
  }
}
