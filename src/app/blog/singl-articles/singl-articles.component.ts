import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-singl-articles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './singl-articles.component.html',
  styleUrl: './singl-articles.component.scss'
})
export class SinglArticlesComponent implements OnInit {
  // Article à afficher
  article: Article | null = null;
  // Identifiant de l'article
  articleId: string | null = 'null';
  // Indicateur de chargement
  loading: boolean = true;
  // Indicateur d'erreur
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    // Récupération de l'identifiant de l'article depuis l'URL
    console.log(this.route);
    this.route.paramMap.subscribe(params => {
      const id = params.get('slug');
      if (id) {
        this.articleId = id; // Conversion en nombre
        this.loadArticle(this.articleId);
      } else {
        this.error = "Identifiant d'article non trouvé";
        this.loading = false;
      }
    });
  }

  /**
   * Charge les détails d'un article spécifique
   * @param id Identifiant de l'article
   */
  loadArticle(slug: string): void {
    this.loading = true;
    this.articleService.getArticleBySlug(slug).subscribe({
      next: (article) => {
        this.article = article;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement de l\'article', err);
        this.error = "Impossible de charger l'article";
        this.loading = false;
      }
    });
  }
}
