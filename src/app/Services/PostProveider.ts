import { Injectable } from '@angular/core';
import { Post, PostView } from '../post/Post';
import { Profile } from 'src/app/profile/profile';
import { ProfileService } from './ProfileService';
import { CommentService } from './CommentService';


@Injectable({providedIn: 'root'})
export class PostProveider {
  private posts: Post[]
  
  constructor(
    private profileService: ProfileService, 
    private commentServie: CommentService)
  {
    this.posts = [
      {
        id: 0,
        authorId: 0,
        namePost: "Озера мира",
        textPost: `Озеро Хевиз, рождённое и подогреваемое вулканом, — настоящий подарок природы, дающий людям надежду на исцеление. Расположенное на западе Венгрии, рядом с одноимённым городом, озеро является единственным в мире пригодным для купания природным водоёмом с биологически активными водами.
        \nПлощадь Хевиза около 48 000 м², а его глубина — 38 метров.
        \nОсновные моменты.
        \nИз десяти подземных родников в озеро поступают радоновые воды, содержащие магний, гидрокарбонаты, соли калия и кальция. Источники, питающие водоём, настолько мощные, что вода в Хевизе обновляется каждые 3 дня.
        \nЛетом озеро нагревается до +38 °C, а зимой оно не холоднее +22 °C, благодаря чему водные процедуры доступны круглый год.
        \nЦелебные испарения водоёма и чистейший воздух заповедного леса, окружающего Хевиз, создают на курорте благотворный климат.`,
        image: "/assets/input-icons/girlInBoat.svg",
        tagsArray: ["#travel", "#lake"]
      },
      {
        id: 1,
        authorId: 1,
        namePost: "PHP 8.2: главные изменения",
        textPost: `Readonly-классы
        Поля readonly сделали еще до версии 8.2. Раньше писать в них код и читать его можно было только в конструкторе. А теперь для этого не нужно помечать каждое поле — достаточно отметить весь класс как readonly.
        Но у фичи есть особенности:`,
        image: "/assets/input-icons/girlInBoat.svg",
        tagsArray: ["#php", "#it", "#web", "#programming"]
      }
    ];
  }

  getPostById(id:number) : PostView | undefined {

    return this.getAllPosts().find(x => x.id == id);
  }

  getPostsWithTag(selectedTag: string): PostView[] {
    const result: PostView[] = this.getAllPosts();
    return result.filter(x => {
      for(let tag of x.tagsArray){
        const normilized = tag.toLocaleLowerCase();
        if(normilized.indexOf(selectedTag)>-1){
          return true;
        }
      }
      return false;
    });
  }

  getAllPosts(): PostView[] {
    const result: PostView[] = [];
    
    for(let item of this.posts){
      const profile = this.profileService.getProfileById(item.authorId);
      const comments = this.commentServie.getCommntsByPostId(item.id);
      const postView: PostView= {
        id: item.id,
        authorId: item.authorId,
        namePost: item.namePost,
        textPost: item.textPost,
        tagsArray: item.tagsArray,
        image: item.image,
        author: profile!,
        comments: comments
      }
      result.push(postView);
    }

    return result;
  }
}
