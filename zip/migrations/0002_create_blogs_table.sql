-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    author_id UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public blogs are viewable by everyone" 
    ON blogs FOR SELECT 
    USING (true);

CREATE POLICY "Users can insert their own blogs" 
    ON blogs FOR INSERT 
    WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update their own blogs" 
    ON blogs FOR UPDATE 
    USING (auth.uid() = author_id);

CREATE POLICY "Users can delete their own blogs" 
    ON blogs FOR DELETE 
    USING (auth.uid() = author_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blogs_updated_at
    BEFORE UPDATE ON blogs
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();