export interface Blog {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  author_id: string;
}

export interface CreateBlogInput {
  title: string;
  content: string;
}