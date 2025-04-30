import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface MediaItem {
  id: string;
  url: string;
  name: string;
}

const MediaManager: React.FC = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();

  const fetchMedia = async () => {
    setLoading(true);
    const { data, error } = await supabase.storage.from('media').list('', { limit: 100 });
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setMedia(
        (data?.map((file: any) => ({
          id: file.id || file.name,
          url: supabase.storage.from('media').getPublicUrl(file.name).data.publicUrl,
          name: file.name,
        })) || [])
      );
    }
    setLoading(false);
  };

  useEffect(() => { fetchMedia(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setLoading(true);
    const file = files[0];
    const { error } = await supabase.storage.from('media').upload(file.name, file);
    if (!error) toast({ title: 'Uploaded', description: 'Media uploaded.' });
    else toast({ title: 'Error', description: error.message, variant: 'destructive' });
    setLoading(false);
    fetchMedia();
  };

  const handleDelete = async (item: MediaItem) => {
    if (!window.confirm('Delete this media item?')) return;
    setLoading(true);
    const { error } = await supabase.storage.from('media').remove([item.name]);
    if (!error) toast({ title: 'Deleted', description: 'Media deleted.' });
    else toast({ title: 'Error', description: error.message, variant: 'destructive' });
    setLoading(false);
    fetchMedia();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-4">
        <Button onClick={() => fileInput.current?.click()} disabled={loading}>Upload Media</Button>
        <input type="file" ref={fileInput} className="hidden" onChange={handleUpload} disabled={loading} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {media.map(item => (
          <div key={item.id} className="border rounded p-2 flex flex-col items-center">
            <img src={item.url} alt={item.name} className="object-contain h-32 w-full mb-2" />
            <div className="text-xs break-all mb-2">{item.name}</div>
            <Button size="sm" variant="destructive" onClick={() => handleDelete(item)} disabled={loading}>Delete</Button>
          </div>
        ))}
      </div>
      {media.length === 0 && <div className="text-gray-500">No media uploaded yet.</div>}
    </div>
  );
};

export default MediaManager;
