create table public.blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  content text not null,
  featured_image text,
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  author_id uuid references auth.users(id) on delete cascade
);

-- Enable RLS
alter table public.blog_posts enable row level security;

-- Create policies
create policy "Public can view published posts" on public.blog_posts
  for select using (published = true);

create policy "Authenticated users can create posts" on public.blog_posts
  for insert with check (auth.role() = 'authenticated');

create policy "Authors can update their own posts" on public.blog_posts
  for update using (auth.uid() = author_id);

create policy "Authors can delete their own posts" on public.blog_posts
  for delete using (auth.uid() = author_id);

create policy "Admins can do everything" on public.blog_posts
  for all using (
    exists (
      select 1
      from auth.users
      where auth.uid() = id
      and raw_user_meta_data->>'isAdmin' = 'true'
    )
  );

-- Create function to automatically update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create trigger to update updated_at
create trigger handle_blog_posts_updated_at
  before update on public.blog_posts
  for each row
  execute function public.handle_updated_at();
