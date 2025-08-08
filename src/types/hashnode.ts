// Hashnode API Types
export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  readTimeInMinutes: number;
  coverImage?: {
    url: string;
    alt?: string;
  };
  content: {
    html: string;
    text: string;
  };
  tags?: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  // SEO Fields
  seo?: {
    title?: string;
    description?: string;
  };
  subtitle?: string;
  ogMetaData?: {
    image?: string;
  };
  canonicalUrl?: string;
}

export interface HashnodePublication {
  id: string;
  title: string;
  displayTitle?: string;
  descriptionSEO?: string;
  posts: {
    edges: Array<{
      node: HashnodePost;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      endCursor?: string;
    };
  };
}

export interface HashnodeQueryResponse {
  publication: HashnodePublication;
}

export interface HashnodePostResponse {
  publication: {
    post: HashnodePost;
  };
}

// Adapted types for our blog structure
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  body: string;
  mainImage?: string;
  // SEO fields
  seoTitle?: string;
  seoDescription?: string;
  subtitle?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
  hasNextPage: boolean;
}