import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/profile';


export interface Chat{
  ID: number;
  membersID: number[];
  image: string | undefined;
  name: string | undefined;
}

export interface ChatView extends Chat{
  profiles: Profile[];
  messages: MessageView[];  
}

export interface Message{
  chatID: number;
  profileID: number;
  message: string;
  date: Date;
}

export interface MessageView extends Message {
  profile: Profile
}


@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss'],
})
export class ChatPreviewComponent  implements OnInit {
  static maxMessageLength = 50; 

  @Input() chat!: ChatView;
  lastMessage: string;

  constructor() { 
    this.lastMessage = "";
  }

  ngOnInit() {
    if(this.chat.messages.length){
      this.lastMessage = this.chat.messages.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
      })[0].message;
    }
    else{
      this.lastMessage = "Сообщение нет";
    }
  }

  getMessage(value: string){
    if(value.length < ChatPreviewComponent.maxMessageLength){
      return value;
    }
    return  value.substring(0, ChatPreviewComponent.maxMessageLength)+"...";
  }

}
