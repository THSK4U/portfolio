import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ExperienceComponent } from './experience/experience.component';
import { HeroComponent } from './hero/hero.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showBackToTop = false;
  isDarkTheme = false;
  currentUrl = '';

  private router = inject(Router);
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl = event.url;
    });

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Check saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
      this.enableDarkTheme();
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (localStorage.getItem('theme') === null) {
        if (e.matches) {
          this.enableDarkTheme();
        } else {
          this.disableDarkTheme();
        }
      }
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.enableDarkTheme();
    } else {
      this.disableDarkTheme();
    }
  }

  private enableDarkTheme() {
    this.renderer.addClass(document.documentElement, 'dark');
    localStorage.setItem('theme', 'dark');
    this.isDarkTheme = true;
  }

  private disableDarkTheme() {
    this.renderer.removeClass(document.documentElement, 'dark');
    localStorage.setItem('theme', 'light');
    this.isDarkTheme = false;
  }
}
