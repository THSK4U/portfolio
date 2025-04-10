import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
