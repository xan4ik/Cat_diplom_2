import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/Services/ChatService';
import { ChatView } from '../chat-preview/chat-preview.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent  implements OnInit {

  private chatID: number;
  chat: ChatView | undefined;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService)
  {
    this.chatID = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.chat = this.chatService.getChatByID(this.chatID);
  }
}
