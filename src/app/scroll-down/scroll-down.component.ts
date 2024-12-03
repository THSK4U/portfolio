import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-down',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="scroll-down" [class.hidden]="isHidden">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
    </div>
  `,
  styleUrls: ['./scroll-down.component.scss']
})
export class ScrollDownComponent {
  isHidden = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHidden = window.scrollY > 100;
  }
}
