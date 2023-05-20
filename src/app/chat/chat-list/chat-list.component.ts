import { Component, OnInit } from '@angular/core';
import { ChatView } from '../chat-preview/chat-preview.component';
import { ChatService } from "../../Services/ChatService";
import { UrlStackService } from 'src/app/Services/UrlStackService';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent  implements OnInit {

  chats: ChatView[] | undefined;
  
  constructor(private chatService: ChatService) {
    UrlStackService.pushUrl("/main/chats")
  }

  ngOnInit() {
    this.chats = this.chatService.getUserChats();
  }
}
