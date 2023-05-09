import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommentService } from 'src/app/Services/CommentService';
import { ProfileService } from 'src/app/Services/ProfileService';
import { Comment } from '../Comment';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss'],
})
export class CommentInputComponent  implements OnInit {
  
  @Input() postId: number | undefined;
  @Output() onSave: EventEmitter<void>;

  commentText: string;
  private comment: Comment | undefined;
  private profileId: number;


  constructor(
    private commentService: CommentService, 
    private profileService: ProfileService,
    private alertController: AlertController) 
  { 
    this.onSave = new EventEmitter();

    this.commentText = "";
    this.profileId = -1;
  }

  ngOnInit() {
    this.profileId = this.profileService.getCurrentUserId();
    this.comment = {
      postId: this.postId!,
      profileId: this.profileId,
      text: "",
      date: new Date()
    } 
  }

  updateText(text: string){
    console.log(text)
    this.comment!.text = text;
  }

  async saveComment(){
    if(! this.comment!.text){
      const alert = await this.alertController.create({
        subHeader: 'Ошибка',
        message: 'Текст комментария не задан',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
    else{
      this.commentText = "";
      this.comment!.date = new Date();
      this.commentService.saveCommnet(this.comment!);
      
      this.onSave.emit();
    }
  }
}
