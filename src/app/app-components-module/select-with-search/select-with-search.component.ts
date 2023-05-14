import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-with-search',
  templateUrl: './select-with-search.component.html',
  styleUrls: ['./select-with-search.component.scss'],
})

export class SelectWithSearchComponent implements OnInit{

  @Output() valueChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() items: any[] = [];
  @Input() multiple: boolean = false;
  @Input() maxSelectionLength: number = 3;
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
        if(this.selectedItems.length < this.maxSelectionLength){
          this.selectedItems.push(item)
        }
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
