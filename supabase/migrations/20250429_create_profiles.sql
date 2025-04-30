-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  role text not null check (role in ('user', 'admin')) default 'user',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

-- Create function to handle new user profiles
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;

-- Create trigger for new users
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create admin user function
create or replace function public.make_user_admin(user_id uuid)
returns void as $$
begin
  update public.profiles
  set role = 'admin'
  where id = user_id;
end;
$$ language plpgsql security definer;
