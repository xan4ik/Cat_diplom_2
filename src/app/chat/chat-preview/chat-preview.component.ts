import { Component, Injectable, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/ProfileService';
import { Profile } from 'src/app/profile/profile';


@Injectable({providedIn: 'root'})
export class ChatService{
  private messages: Message[] = [
    {
      chatID: 0,
      profileID: 0,
      message: "привет",
      date: new Date()
    }
  ];
  
  
  private chats: Chat[] = [
    {
      ID: 0,
      membersID: [0, 1]
    },
    {
      ID: 2,
      membersID: [2, 3]
    },
    {
      ID: 3,
      membersID: [0, 1, 2, 3]
    },
    {
      ID: 4,
      membersID: [0, 4, 5]
    },
  ];

  constructor(private profileService: ProfileService){
  }

  public getAllChats() : ChatView[]{
    const currentUserID = this.profileService.getCurrentUserId();
    const chats = this.chats.filter( x => x.membersID.indexOf(currentUserID) > -1);

    return chats.map(x => {
      const chatMembers = x.membersID.map(id => this.profileService.getProfileById(id)!);
      const messages = this.messages
              .filter(message => message.chatID === x.ID)
              .map(message => {
                const messageView : MessageView = {
                  chatID: message.chatID,
                  profileID: message.profileID,
                  message: message.message,
                  date: message.date,
                  profile: this.profileService.getProfileById(message.profileID)!
                }
                return messageView;
              });

      const chatView : ChatView ={
        ID: x.ID,
        membersID: x.membersID,
        profiles: chatMembers,
        messages : messages
      }    

      return chatView;
    });
  }
}

export interface Chat{
  ID: number
  membersID: number[];
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

  constructor() { }

  ngOnInit() {}

}
