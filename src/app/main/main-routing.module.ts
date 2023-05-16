import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
    {
      path: '',
      component: MainPageComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('../post/post.module').then( m => m.PostModule)
        },
        {
          path: 'people',
          loadChildren: () => import('../people/people.module').then( m => m.PeopleModule)
        },
        {
          path: 'posts',
          loadChildren: () => import('../post/post.module').then( m => m.PostModule)
        },
        {
          path: 'profiles',
          loadChildren: () => import('../profile/profile.module').then( m => m.ProfileModule)
        },
        {
          path: 'chats',
          loadChildren: () => import('../chat/chat.module').then( m => m.ChatModule)
        },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
