import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {ExperienceComponent} from './experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, IntroductionComponent, SkillsComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
