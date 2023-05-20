import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { IonicModule } from '@ionic/angular';
import { AppComponentsModuleModule } from '../app-components-module/app-components-module.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatPageComponent } from './chat-page/chat-page.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppComponentsModuleModule,
    ChatRoutingModule
  ],
  declarations: [ChatListComponent, ChatPreviewComponent, ChatMessageComponent, ChatPageComponent]
})
export class ChatModule { }
