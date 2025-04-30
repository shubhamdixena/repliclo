import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { blogService } from '@/services/blog.service';
import type { Blog, CreateBlogInput } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';

export function useBlogs() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: () => blogService.getBlogs(),
  });
}

export function useBlog(id: string) {
  return useQuery({
    queryKey: ['blogs', id],
    queryFn: () => blogService.getBlog(id),
  });
}

export function useCreateBlog() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (blog: CreateBlogInput) => blogService.createBlog(blog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: 'Success',
        description: 'Blog post created successfully',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });
}

export function useUpdateBlog() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateBlogInput> }) =>
      blogService.updateBlog(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: 'Success',
        description: 'Blog post updated successfully',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });
}

export function useDeleteBlog() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: string) => blogService.deleteBlog(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: 'Success',
        description: 'Blog post deleted successfully',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });
}