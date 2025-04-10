import { Routes } from '@angular/router';
import { HomeArticlesComponent } from './home-articles/home-articles.component';
import { SinglArticlesComponent } from './singl-articles/singl-articles.component';

export const blogRoutes: Routes = [
  { path: '', component: HomeArticlesComponent },
  { path: 'article/:id', component: SinglArticlesComponent }
];
