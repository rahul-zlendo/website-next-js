// WordPress REST API Types

export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WPAuthor[];
    'wp:featuredmedia'?: WPFeaturedMedia[];
    'wp:term'?: WPTerm[][];
  };
}

export interface WPAuthor {
  id: number;
  name: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls?: {
    24: string;
    48: string;
    96: string;
  };
}

export interface WPFeaturedMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  alt_text: string;
  source_url: string;
  media_details: {
    width: number;
    height: number;
    sizes?: {
      thumbnail?: WPImageSize;
      medium?: WPImageSize;
      medium_large?: WPImageSize;
      large?: WPImageSize;
      full?: WPImageSize;
    };
  };
}

export interface WPImageSize {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface WPTerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WPCategory extends WPTerm {
  taxonomy: 'category';
  count: number;
  description: string;
  parent: number;
}

export interface WPTag extends WPTerm {
  taxonomy: 'post_tag';
  count: number;
  description: string;
}

// Transformed types for internal use
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  dateFormatted: string;
  modifiedDate: string;
  author: {
    name: string;
    avatar: string | null;
    slug: string;
  };
  featuredImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  } | null;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  tags: {
    id: number;
    name: string;
    slug: string;
  }[];
  readingTime: number;
}

export interface PaginatedPosts {
  posts: BlogPost[];
  totalPages: number;
  totalPosts: number;
  currentPage: number;
}
