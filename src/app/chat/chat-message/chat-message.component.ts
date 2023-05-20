import { Component, Input, OnInit } from '@angular/core';
import { MessageView } from '../chat-preview/chat-preview.component';
import { ProfileService } from 'src/app/Services/ProfileService';
import { ImageSize } from 'src/app/app-components-module/image-wrapper/image-wrapper.component';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit{

  @Input() message!: MessageView;
  isCurrentUserMessage: boolean;
  imageSize: ImageSize;

  constructor(private profileService: ProfileService) {
    this.isCurrentUserMessage = false;
    this.imageSize = ImageSize.Small;
  }

  ngOnInit(): void {
    const currentUserID =  this.profileService.getCurrentUserId();
    this.isCurrentUserMessage = this.message.profileID === currentUserID;
  }
}
