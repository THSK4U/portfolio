import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Article } from '../../../models/article.model';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-tous',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tous.component.html',
  styleUrl: './tous.component.scss'
})
export class TousComponent implements OnInit {
  // Liste de tous les articles
  articles: Article[] = [];
  // Indicateur de chargement
  loading: boolean = true;
  // Indicateur d'erreur
  error: string | null = null;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  /**
   * Charge tous les articles depuis l'API
   */
  loadArticles(): void {
    this.loading = true;
    this.articleService.getAllArticles().subscribe({
      next: (articles) => {
        this.articles = articles;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des articles', err);
        this.error = 'Oups ! Une erreur est survenue... Revenez nous voir bientôt !';
        this.loading = false;
      }
    });
  }
}
