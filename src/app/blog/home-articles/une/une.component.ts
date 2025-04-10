import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-une',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './une.component.html',
  styleUrls: ['./une.component.scss', './unelist.scss']
})
export class UneComponent {

    list: number[] = [1,2,3];
}
