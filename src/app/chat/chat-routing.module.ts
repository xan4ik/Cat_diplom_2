import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

const routes: Routes = [
  {
    path: '',
    component: ChatListComponent,
  },
  {
    path: 'chat/:id',
    component: ChatPageComponent
  }

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ChatRoutingModule { }
