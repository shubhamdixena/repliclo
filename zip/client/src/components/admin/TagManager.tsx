import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface Tag {
  id: number;
  name: string;
}

const TagManager: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [name, setName] = useState('');
  const [editing, setEditing] = useState<Tag | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchTags = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('tags').select('*').order('id', { ascending: true });
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setTags(data || []);
    }
    setLoading(false);
  };

  useEffect(() => { fetchTags(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      const { error } = await supabase.from('tags').update({ name }).eq('id', editing.id);
      if (!error) toast({ title: 'Updated', description: 'Tag updated.' });
      else toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      const { error } = await supabase.from('tags').insert({ name });
      if (!error) toast({ title: 'Added', description: 'Tag added.' });
      else toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
    setName(''); setEditing(null); setLoading(false); fetchTags();
  };

  const handleEdit = (tag: Tag) => {
    setEditing(tag);
    setName(tag.name);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Delete this tag?')) return;
    setLoading(true);
    const { error } = await supabase.from('tags').delete().eq('id', id);
    if (!error) toast({ title: 'Deleted', description: 'Tag deleted.' });
    else toast({ title: 'Error', description: error.message, variant: 'destructive' });
    setLoading(false); fetchTags();
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Tag name" disabled={loading} />
        <Button type="submit" disabled={loading}>{editing ? 'Update' : 'Add'}</Button>
        {editing && <Button type="button" onClick={() => { setEditing(null); setName(''); }} variant="outline">Cancel</Button>}
      </form>
      <table className="min-w-full divide-y divide-gray-200">
        <thead><tr><th className="px-4 py-2">Name</th><th></th></tr></thead>
        <tbody>
          {tags.map(tag => (
            <tr key={tag.id}>
              <td className="px-4 py-2">{tag.name}</td>
              <td className="px-4 py-2 text-right">
                <Button size="sm" variant="outline" onClick={() => handleEdit(tag)} disabled={loading}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(tag.id)} disabled={loading}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TagManager;
