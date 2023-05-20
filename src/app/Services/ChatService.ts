import { Injectable } from '@angular/core';
import { ProfileService } from 'src/app/Services/ProfileService';
import { Message, Chat, ChatView, MessageView } from '../chat/chat-preview/chat-preview.component';



@Injectable({ providedIn: 'root' })
export class ChatService {
  private messages: Message[] = [
    {
      chatID: 2,
      profileID: 2,
      message: "Привет, можешь помочь со встраиванием нейронки а то как-то не работает как хочется, а хотелось бы чтобы работало(",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "Бе бе бе",
      date: new Date()
    },
    {
      chatID: 2,
      profileID: 3,
      message: "50 рублей",
      date: new Date()
    }
  ];


  private chats: Chat[] = [
    {
      ID: 0,
      membersID: [0, 1],
      image: undefined,
      name: undefined
    },
    {
      ID: 2,
      membersID: [2, 3],
      image: undefined,
      name: undefined
    },
    {
      ID: 3,
      membersID: [0, 1, 2, 3],
      image: "/assets/chatImg/group-chat2.svg",
      name: "Груповой чат 2"
    },
    {
      ID: 4,
      membersID: [0, 4, 5],
      image: "/assets/chatImg/group-chat1.svg",
      name: "Груповой чат 1"
    },
  ];

  constructor(private profileService: ProfileService) {
  }

  public postNewMessage(message: string, chatId: number){
    const currentUserID = this.profileService.getCurrentUserId();
    const newMessage: Message ={
      chatID: chatId,
      profileID: currentUserID,
      message: message,
      date: new Date()
    } 
    
    this.messages.push(newMessage);
  }

  public getChatByID(id: number): ChatView | undefined{
    return this.getAllChats().find(x => x.ID == id)
  }

  public getAllChats(): ChatView[] {
    const currentUserID = this.profileService.getCurrentUserId();
    const chats = this.chats.filter(x => x.membersID.indexOf(currentUserID) > -1);

    return chats.map(x => {
      const chatMembers = x.membersID.map(id => this.profileService.getProfileById(id)!);
      const messages = this.messages
        .filter(message => message.chatID === x.ID)
        .map(message => {
          const messageView: MessageView = {
            chatID: message.chatID,
            profileID: message.profileID,
            message: message.message,
            date: message.date,
            profile: this.profileService.getProfileById(message.profileID)!
          };
          return messageView;
        });

      const currentUserID = this.profileService.getCurrentUserId();
      const firstChatUser = chatMembers.find(x => x.id != currentUserID);

      const chatName = x.membersID.length > 2 ? x.name : `${firstChatUser?.name.secondName} ${firstChatUser?.name.firstName} ${firstChatUser?.name.fathersName[0]}.`;
      const chatImage = x.membersID.length > 2 ? x.image : firstChatUser?.imageSource;

      const chatView: ChatView = {
        ID: x.ID,
        image: chatImage,
        name: chatName,
        membersID: x.membersID,
        profiles: chatMembers,
        messages: messages
      };

      return chatView;
    });
  }

  public getUserChats() {
    const currentUserID = this.profileService.getCurrentUserId();
    return this.getAllChats().filter(x => x.membersID.indexOf(currentUserID) > -1);
  }
}
