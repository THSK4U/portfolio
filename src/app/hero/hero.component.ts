import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  openForm() {
    document.getElementById("myForm")!.style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm")!.style.display = "none";

  }


}
