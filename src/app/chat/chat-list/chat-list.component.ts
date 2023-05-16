import { Component, OnInit } from '@angular/core';
import { ChatService, ChatView } from '../chat-preview/chat-preview.component';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent  implements OnInit {

  chats: ChatView[] | undefined;
  
  constructor(private chatService: ChatService) {
  
  }

  ngOnInit() {
    this.chats = this.chatService.getUserChats();
  }
}
