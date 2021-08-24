export interface BlogPost {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: AuthorCategory;
  category: AuthorCategory;
  published_at: string;
  created_at: string;
  updated_at: string;
  coverphoto: Media;
  postmedia: Media;
}

export interface AuthorCategory {
  id: number;
  name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  // TODO string || undefined? => ver json de alternative text
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: MediaFormat;
    small: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  created_at: string;
  updated_at: string;
}

export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}
