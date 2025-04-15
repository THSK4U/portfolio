import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://sellak.vercel.app';

  constructor(private http: HttpClient) { }

  /**
   * Récupère tous les articles depuis l'API
   * @returns Observable contenant un tableau d'articles
   */
  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/api/user/article`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Récupère un article spécifique par son ID
   * @param id L'identifiant de l'article
   * @returns Observable contenant l'article demandé
   */
  getArticleBySlug(slug: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/api/user/article/${slug}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Gère les erreurs HTTP
   * @param error L'erreur HTTP
   * @returns Observable d'erreur
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur est survenue';

    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Code: ${error.status}, Message: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
