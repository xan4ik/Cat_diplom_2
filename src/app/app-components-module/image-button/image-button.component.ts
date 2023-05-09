import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss'],
})
export class ImageButtonComponent {

  @Input() link: string = "";
  @Input() source: string = "";
 
  constructor() { }

}
