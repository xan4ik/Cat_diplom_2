import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-field-with-icon',
  templateUrl: './input-field-with-icon.component.html',
  styleUrls: ['./input-field-with-icon.component.scss'],
})
export class InputFieldWithIconComponent implements OnInit{

  private static availableTypes: string[] = ["text", "password","email", "tel", "number", "button"] 

  @Input() source: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() value: string;

  @Output() onChanged = new EventEmitter<string>();


  inputValue:string = ""
  initType:string ="";
  
  constructor() {
    this.source = "";
    this.type = "text";
    this.placeholder = "Введите значение"
    this.value = "";
  }

  ngOnInit(): void {
    if(InputFieldWithIconComponent.availableTypes.indexOf(this.type) == -1){
      throw new Error("unavailable type");
    }
    this.initType = this.type;
    this.inputValue = this.value;
  }

  onValueChange(some: string){
    this.onChanged.emit(some); 
  }

  onShowPassword(){
    if(this.type == 'password')
      this.type = 'text';
    else
      this.type = "password"; 
  }
}
