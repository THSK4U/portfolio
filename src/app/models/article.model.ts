export interface Keyword {
  id?: number;
  keyword?: string;
  secondaryKeyword?: string[];
  status?: 'PENDING' | 'USED';
}

export interface Article {
  id?: number;
  title?: string;
  description?: string;
  status?: 'PENDING' | 'APPROVED' | 'REJECTED';
  imageUrl?: string;
  altText?: string;
  slug?: string;
  author?: string;
  content?: string;
  keyword?: Keyword;
  publishedDate?: string;
}