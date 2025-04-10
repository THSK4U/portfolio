import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollDownComponent } from '../scroll-down/scroll-down.component';
import { SkillsComponent } from '../skills/skills.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    IntroductionComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ScrollDownComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss']
})
export class HomeComponent {
  
}
