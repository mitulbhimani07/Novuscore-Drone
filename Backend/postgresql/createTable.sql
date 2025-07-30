-- Create ContactUs table
CREATE TABLE public.ContactUs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.ContactUs ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for contact form)
CREATE POLICY "Allow public inserts" ON public.ContactUs
FOR INSERT TO public
WITH CHECK (true);

-- Allow authenticated reads (for admin panel)
CREATE POLICY "Allow authenticated reads" ON public.ContactUs
FOR SELECT TO authenticated
USING (true);

-- Insert sample data
INSERT INTO ContactUs (name, email, phone, message) VALUES 
('John Doe', 'john@example.com', '+1234567890', 'Hello, I have a question about your services');

-- Verify data
SELECT * FROM ContactUs ORDER BY created_at DESC;