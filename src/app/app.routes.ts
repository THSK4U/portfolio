import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { blogRoutes } from './blog/blog-routing';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Articles', loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent),
        children: blogRoutes
     },

];
