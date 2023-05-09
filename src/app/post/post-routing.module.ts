import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
    {
      path: '',
      component: PostListComponent,
    },
    {
      path: 'list/:tag',
      component: PostListComponent,
    },
    {
      path: 'post/:id',
      component: PostDetailComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {}
