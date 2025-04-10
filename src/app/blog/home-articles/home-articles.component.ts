import { Component } from '@angular/core';
import { UneComponent } from "./une/une.component";
import { TousComponent } from "./tous/tous.component";

@Component({
  selector: 'app-home-articles',
  standalone: true,
  imports: [UneComponent, TousComponent],
  templateUrl: './home-articles.component.html',
  styleUrl: './home-articles.component.scss'
})
export class HomeArticlesComponent {

}
