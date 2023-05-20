import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/Services/ChatService';
import { ChatView } from '../chat-preview/chat-preview.component';
import { ProfileService } from 'src/app/Services/ProfileService';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent  implements OnInit, AfterViewInit{

  private chatID: number;
  chat: ChatView | undefined;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private profileService: ProfileService)
  {
    this.chatID = route.snapshot.params['id'];
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.chat = this.chatService.getChatByID(this.chatID);
  }

  getChatName(){
    if(!this.chat)
      return "Чат недоступен";

    if(this.chat.name){
      return this.chat.name;
    }
    
    const currentUserId = this.profileService.getCurrentUserId();
    const otherUserName = this.chat.profiles.find(x => x.id != currentUserId)!.name;
    return `${otherUserName.secondName} ${otherUserName.firstName} ${otherUserName.fathersName[0]}`;
  }
}
