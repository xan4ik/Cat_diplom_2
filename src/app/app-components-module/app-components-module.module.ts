import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldWithIconComponent } from './input-field-with-icon/input-field-with-icon.component';
import { FormsModule } from '@angular/forms';
import { ImageButtonComponent } from './image-button/image-button.component';
import { HeaderComponent } from './header/header.component';
import { ButtonTextComponent } from './button-text/button-text.component';
import { RouterModule } from '@angular/router';
import { SelectWithSearchComponent } from './select-with-search/select-with-search.component';
import { IonicModule } from '@ionic/angular';
import { TextWithBorderComponent } from './text-with-border/text-with-border.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToggleComponent } from './toggle/toggle.component'

@NgModule({
  declarations: [InputFieldWithIconComponent, 
    ImageButtonComponent,
    HeaderComponent,
    ButtonTextComponent,
    SelectWithSearchComponent,
    TextWithBorderComponent,
    TabsComponent,
    ToggleComponent],
  imports: [ CommonModule, FormsModule, RouterModule, IonicModule],

  exports: [InputFieldWithIconComponent,
    ImageButtonComponent,
    HeaderComponent, 
    ButtonTextComponent, 
    SelectWithSearchComponent, 
    TextWithBorderComponent,
    TabsComponent,
    ToggleComponent
  ]
})
export class AppComponentsModuleModule { }
