import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-wrapper',
  templateUrl: './image-wrapper.component.html',
  styleUrls: ['./image-wrapper.component.scss'],
})
export class ImageWrapperComponent {
  @Input() source!: string;
  @Input() size: ImageSize = ImageSize.Default; 
}

export enum ImageSize { 
  Small = "small", 
  Default = "default",
  Big = "big",  
};
