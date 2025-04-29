import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useBlogs, useCreateBlog, useUpdateBlog, useDeleteBlog } from '@/hooks/use-blogs';
import type { Blog } from '@/types/blog';
import { Loader2 } from 'lucide-react';

export default function AdminPanel() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const { data: blogs, isLoading } = useBlogs();
  const createBlogMutation = useCreateBlog();
  const updateBlogMutation = useUpdateBlog();
  const deleteBlogMutation = useDeleteBlog();

  // Check for admin access
  useEffect(() => {
    if (user?.email !== 'admin@gmail.com') {
      setLocation('/login');
    }
  }, [user, setLocation]);

  // If not admin, show access denied
  if (!user || user.email !== 'admin@gmail.com') {
    return (
      <div className="container mx-auto p-8">
        <Card>
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              Please login with an admin account to access the admin panel.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
          <CardDescription>
            Fill in the details below to {editingBlog ? 'update the' : 'create a new'} blog post.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Title</label>
              <Input
                id="title"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">Content</label>
              <Textarea
                id="content"
                placeholder="Write your blog content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={5}
              />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button 
              type="submit" 
              disabled={createBlogMutation.isPending || updateBlogMutation.isPending}
            >
              {(createBlogMutation.isPending || updateBlogMutation.isPending) && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {editingBlog ? 'Update' : 'Create'} Blog
            </Button>
            {editingBlog && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setEditingBlog(null);
                  setTitle('');
                  setContent('');
                }}
              >
                Cancel Edit
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Blog Posts</CardTitle>
          <CardDescription>Manage your existing blog posts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoading ? (
            <div className="flex justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : !blogs?.length ? (
            <p className="text-center text-muted-foreground">No blog posts found.</p>
          ) : (
            blogs.map((blog) => (
              <Card key={blog.id}>
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription>
                    Created at: {new Date(blog.created_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{blog.content}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(blog)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(blog.id)}
                    disabled={deleteBlogMutation.isPending}
                  >
                    {deleteBlogMutation.isPending && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}