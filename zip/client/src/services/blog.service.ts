import { supabase } from '@/lib/supabase';
import type { Blog, CreateBlogInput } from '@/types/blog';

export const blogService = {
  async getBlogs() {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as Blog[];
  },

  async getBlog(id: string) {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as Blog;
  },

  async createBlog(blog: CreateBlogInput) {
    const { data, error } = await supabase
      .from('blogs')
      .insert([blog])
      .select()
      .single();

    if (error) throw error;
    return data as Blog;
  },

  async updateBlog(id: string, blog: Partial<CreateBlogInput>) {
    const { data, error } = await supabase
      .from('blogs')
      .update(blog)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Blog;
  },

  async deleteBlog(id: string) {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};