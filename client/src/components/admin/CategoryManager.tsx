import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface Category {
  id: number;
  name: string;
}

const CategoryManager: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [editing, setEditing] = useState<Category | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('categories').select('*').order('id', { ascending: true });
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setCategories(data || []);
    }
    setLoading(false);
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      const { error } = await supabase.from('categories').update({ name }).eq('id', editing.id);
      if (!error) toast({ title: 'Updated', description: 'Category updated.' });
      else toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      const { error } = await supabase.from('categories').insert({ name });
      if (!error) toast({ title: 'Added', description: 'Category added.' });
      else toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
    setName(''); setEditing(null); setLoading(false); fetchCategories();
  };

  const handleEdit = (cat: Category) => {
    setEditing(cat);
    setName(cat.name);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Delete this category?')) return;
    setLoading(true);
    const { error } = await supabase.from('categories').delete().eq('id', id);
    if (!error) toast({ title: 'Deleted', description: 'Category deleted.' });
    else toast({ title: 'Error', description: error.message, variant: 'destructive' });
    setLoading(false); fetchCategories();
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Category name" disabled={loading} />
        <Button type="submit" disabled={loading}>{editing ? 'Update' : 'Add'}</Button>
        {editing && <Button type="button" onClick={() => { setEditing(null); setName(''); }} variant="outline">Cancel</Button>}
      </form>
      <table className="min-w-full divide-y divide-gray-200">
        <thead><tr><th className="px-4 py-2">Name</th><th></th></tr></thead>
        <tbody>
          {categories.map(cat => (
            <tr key={cat.id}>
              <td className="px-4 py-2">{cat.name}</td>
              <td className="px-4 py-2 text-right">
                <Button size="sm" variant="outline" onClick={() => handleEdit(cat)} disabled={loading}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(cat.id)} disabled={loading}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManager;
