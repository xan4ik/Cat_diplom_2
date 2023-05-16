import { Component, Injectable, Input, OnInit } from '@angular/core';
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
      membersID: [0, 1],
      image: undefined,
      name : undefined
    },
    {
      ID: 2,
      membersID: [2, 3],
      image: undefined,
      name : undefined
    },
    {
      ID: 3,
      membersID: [0, 1, 2, 3],
      image: undefined,
      name : "Груповой чат 2"
    },
    {
      ID: 4,
      membersID: [0, 4, 5],
      image: undefined,
      name : "Груповой чат 1"
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

      const currentUserID = this.profileService.getCurrentUserId();
      const firstChatUser = chatMembers.find(x => x.id != currentUserID);

      const chatName =  x.membersID.length > 2 ? x.name : `${firstChatUser?.name.secondName} ${firstChatUser?.name.firstName} ${firstChatUser?.name.fathersName[0]}.`
      const chatImage = x.membersID.length > 2 ? x.image : firstChatUser?.imageSource;

      const chatView : ChatView ={
        ID: x.ID,
        image: chatImage,
        name: chatName,
        membersID: x.membersID,
        profiles: chatMembers,
        messages : messages
      }    

      return chatView;
    });
  }

  public getUserChats(){
    const currentUserID = this.profileService.getCurrentUserId();
    return this.getAllChats().filter(x => x.membersID.indexOf(currentUserID) > -1);
  }
}

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

  @Input() chat!: ChatView;

  constructor() { }

  ngOnInit() {}

}