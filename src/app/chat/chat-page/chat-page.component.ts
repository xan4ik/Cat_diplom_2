import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/Services/ChatService';
import { ChatView } from '../chat-preview/chat-preview.component';
import { ProfileService } from 'src/app/Services/ProfileService';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent  implements OnInit, AfterViewChecked{

  private chatID: number;
  chat: ChatView | undefined;
  
  @ViewChild('messageBar', { static: false }) messageBar!: ElementRef;
  
  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private profileService: ProfileService)
  {
    this.chatID = route.snapshot.params['id'];
  }

  ngAfterViewChecked(): void {
    this.messageBar.nativeElement.scrollTop =this.messageBar.nativeElement.scrollHeight; 
  }

  ngOnInit() {
    this.chat = this.chatService.getChatByID(this.chatID);
  }

  sendNewMessage(message: string){
    if(message){
      const result = this.chatService.postNewMessage(message, this.chat!.ID);
      this.chat!.messages.push(result);
    }
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
