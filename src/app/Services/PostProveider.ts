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
        image: "/assets/postImg/girlInBoat.jpg",
        tagsArray: ["#travel", "#lake", "#Hungary"]
      },
      {
        id: 1,
        authorId: 1,
        namePost: "PHP 8.2: главные изменения",
        textPost:  `Readonly-классы
        \nПоля readonly сделали еще до версии 8.2. Раньше писать в них код и читать его можно было только в конструкторе. А теперь для этого не нужно помечать каждое поле — достаточно отметить весь класс как readonly.
        \nНо у фичи есть особенности:
        \n1. Readonly-классы недоступны для классов с необъявленными типами.
        \n2. Также readonly-классы недоступны для классов со статическими свойствами.
        \n3. Если мы захотим наследоваться от старого readonly-класса, новый тоже должен быть Readonly.`,
        image: "/assets/postImg/php.jpg",
        tagsArray: ["#php", "#it", "#web", "#programming"]
      },
      {
        id: 2,
        authorId: 1,
        namePost: "PHP 8.2: главные изменения",
        textPost: `Типы в виде дизъюнктивной нормальной формы (ДНФ)
        \nТеперь вместо того, чтобы указывать тип mixed для аргументов в методах, можно просто перечислять необходимые типы через амперсанд.
        \nПожелание от меня: будьте осторожны с этой фичей. Она позволяет много методов объединять в один. Если бы я программировал приложения, то так не делал бы. А вот во фреймворках она будет очень кстати, потому что иногда, ради красивой API, мы сознательно жертвуем такой вот правильностью — используем подход с mixed-типами в сигнатуре.`,
        image: "/assets/postImg/php2.png",
        tagsArray: ["#php", "#it", "#web", "#programming"]
      },
      {
        id: 3,
        authorId: 3,
        namePost: "Тенденции графического дизайна на 2023 год",
        textPost: `Мистицизм
        \nВ контексте дизайна мистицизм включает иконографию, связанную с астрологией и гаданием. Эта тенденция в значительной степени опирается на применение популярных символов — знаков зодиака, всевидящего ока, цветка лотоса и сакральной геометрии. Как и в прошлые века, эти символы действуют как талисманы, наполняя физический и потусторонний мир более глубоким смыслом.
        \nС визуальной точки зрения такому дизайну присуща мягкость: тонкие линии и органические изгибы кажутся легкими и нежными, а приглушенные цвета успокаивают. Образы луны, звезд и задумчивых лиц пробуждают душевный покой, избавляют от земных забот, дарят надежду и утешение. Все это делает тренд привлекательным для широкой аудитории: не обязательно верить картам Таро, чтобы ощутить безмятежность мистического дизайна.`,
        image: "/assets/postImg/grDesign1.png",
        tagsArray: ["#design", "#magic", "#mysticism", "#trend"]
      },
      {
        id: 4,
        authorId: 3,
        namePost: "Тенденции графического дизайна на 2023 год",
        textPost: `Возрождение панка
        \nПанк — бунтарская контркультура, уходящая корнями в дадаизм 1920-х годов. Она зародилась на задворках общества и сохраняется там по сей тень. Однако в 2023 году мы станем свидетелями возрождения ее популярности, ведь причин для протеста сейчас предостаточно. Мало того, что экспоненциальный разрыв в уровне благосостояния стал более очевидным с началом рецессии, смерть британской королевы в 2022 году вызвала новую волну протестов против монархии и ее колониального наследия.
        \nС визуальной точки зрения для панка характерен подход “сделай сам”: небрежные надписи, вырезки, несочетающиеся шрифты, хаотичные коллажи. Панк-дизайн — это полный отказ от роскоши и порядка. Такие работы выглядят грязно и сумбурно, они представляют собой отражение реальной жизни, и зрители находят утешение в этой честности. Панк-композиции наполнены энергией — вы практически можете услышать вопль разочарования в неровных краях и брызгах граффити.`,
        image: "/assets/postImg/grDesign2.png",
        tagsArray: ["#design", "#punks", "#trend"]
      },
      {
        id: 5,
        authorId: 3,
        namePost: "Тенденции графического дизайна на 2023 год",
        textPost: `Космическая психоделия 90-х
        \nВ прошлом году психоделия 60-х вернулась в графический дизайн в форме эскапизма (бегство от реальности), завлекая зрителей в насыщенные, красочные миры. В 2023 году тенденция продолжит развиваться, но на этот раз через космическую психоделию 90-х.
        \nЕсли психоделия часто черпает вдохновение из природы (разноцветные облака, тающие грибы и т.д.), то космическая психоделия — это союз будущего и прошлого. В ней представлены ретро-техники 90-х годов: стиль Мемфис, эстетика субботних утренних мультфильмов и цвета школьных принадлежностей от Лизы Франк. И все это смешивается с футуристическими элементами, такими как андроиды и космические корабли, vaporwave-ландшафты, смоделированные среды и неоновый киберпанк. Эти яркие иллюстрации отражают оптимизм, с которым современные дизайнеры смотрят в технологическое будущее.`,
        image: "/assets/postImg/grDesign3.png",
        tagsArray: ["#design", "#space", "#trend", "#90s"]
      },
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
