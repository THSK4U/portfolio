import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { Article } from '../../../models/article.model';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-une',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './une.component.html',
  styleUrls: ['./une.component.scss', './unelist.scss']
})
export class UneComponent implements OnInit {
    // Article principal mis en avant
    featuredArticle: Article | null = null;
    // Liste des autres articles
    list: Article[] = [];
    // Indicateur de chargement
    loading: boolean = true;
    // Indicateur d'erreur
    error: string | null = null;

    constructor(private articleService: ArticleService,private router: Router) {}

    ngOnInit(): void {
        this.loadArticles();
    }
    goToHome() {
      this.router.navigate(['/']);
    }
    /**
     * Charge les articles depuis l'API
     */
    loadArticles(): void {
        this.loading = true;
        this.articleService.getAllArticles().subscribe({
            next: (articles) => {
                if (articles && articles.length > 0) {
                    // Le premier article est mis en avant
                    this.featuredArticle = articles[0];
                    // Les autres articles sont dans la liste
                    this.list = articles.slice(1, 4); // Limite à 3 articles supplémentaires

                }
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
