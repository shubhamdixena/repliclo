import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import RichTextEditor from '@/components/RichTextEditor';
import { supabase } from '@/lib/supabase';

interface BlogPost {
  id?: string;
  title: string;
  content: string;
  featured_image?: string;
  published: boolean;
  author?: string;
  category?: string;
  tags?: string[];
}

interface BlogPostEditorProps {
  post?: BlogPost;
  onSave: () => void;
  onCancel: () => void;
}

const BlogPostEditor = ({ post, onSave, onCancel }: BlogPostEditorProps) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [featuredImage, setFeaturedImage] = useState(post?.featured_image || '');
  const [published, setPublished] = useState(post?.published || false);
  const [author, setAuthor] = useState(post?.author || '');
  const [category, setCategory] = useState(post?.category || '');
  const [tags, setTags] = useState<string[]>(post?.tags || []);
  const [tagsInput, setTagsInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    try {
      setLoading(true);

      if (!title.trim() || !content.trim()) {
        toast({
          title: "Error",
          description: "Title and content are required.",
          variant: "destructive",
        });
        return;
      }

      const postData = {
        title,
        content,
        featured_image: featuredImage,
        published,
        author,
        category,
        tags,
        updated_at: new Date().toISOString(),
      };

      let error;
      if (post?.id) {
        // Update existing post
        const { error: updateError } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', post.id);
        error = updateError;
      } else {
        // Create new post
        const { error: insertError } = await supabase
          .from('blog_posts')
          .insert([{ ...postData, created_at: new Date().toISOString() }]);
        error = insertError;
      }

      if (error) throw error;

      toast({
        title: "Success",
        description: `Post ${post?.id ? 'updated' : 'created'} successfully.`,
      });

      onSave();
    } catch (error: any) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save post.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle tags input (comma separated)
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsInput(e.target.value);
    setTags(e.target.value.split(',').map(tag => tag.trim()).filter(Boolean));
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          disabled={loading}
        />
      </div>

      <div>
        <Label htmlFor="content">Content</Label>
        <RichTextEditor
          value={content}
          onChange={setContent}
          disabled={loading}
          placeholder="Write your blog post content here..."
        />
      </div>

      <div>
        <Label htmlFor="featuredImage">Featured Image URL</Label>
        <Input
          id="featuredImage"
          value={featuredImage}
          onChange={(e) => setFeaturedImage(e.target.value)}
          placeholder="Enter image URL"
          disabled={loading}
        />
      </div>

      <div>
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
          disabled={loading}
        />
      </div>

      <div>
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
          disabled={loading}
        />
      </div>

      <div>
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input
          id="tags"
          value={tagsInput}
          onChange={handleTagsChange}
          placeholder="e.g. water, charity, impact"
          disabled={loading}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="published"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          disabled={loading}
          className="rounded border-gray-300"
        />
        <Label htmlFor="published">Publish post</Label>
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          variant="outline"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? 'Saving...' : (post?.id ? 'Update Post' : 'Create Post')}
        </Button>
      </div>
    </div>
  );
};

export default BlogPostEditor;
