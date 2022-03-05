export interface IPost {
  id: string
  slug: string
  featured_media: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
}

export interface ICategory {
  id: string
  slug: string
  name: string
  description: string
}