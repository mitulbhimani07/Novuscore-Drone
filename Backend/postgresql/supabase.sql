-- Create table with 'suggestions' column
CREATE TABLE ContactUs (
    Id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,  -- Using TEXT to allow for various phone number formats
    message TEXT NOT NULL,
    suggestions TEXT,  -- New column for suggestions
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Allow public read access
CREATE POLICY "Enable insert for all users"
ON "ContactUs"
FOR INSERT
TO public
WITH CHECK (true);

-- More restrictive policies for production
CREATE POLICY "Limit contact form inserts" 
ON "public"."ContactUs"
FOR INSERT 
TO anon
WITH CHECK (
  char_length(name) < 100 AND
  char_length(message) < 1000 AND
  char_length(suggestions) < 500 AND -- Restrict suggestions length
  email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'
);

-- Insert query with 'suggestions'
INSERT INTO ContactUs (name, email, phone, message, suggestions)
VALUES (
  'John Doe', 
  'john@example.com', 
  '+1234567890', 
  'Hello, I have a question about your services',
  'It would be great if you offered 24/7 customer support'
);

-- Select query including 'suggestions'
SELECT * FROM ContactUs
ORDER BY created_at DESC;

-- Indexes: For better performance on large tables
CREATE INDEX idx_contactus_created_at ON ContactUs(created_at);
CREATE INDEX idx_contactus_email ON ContactUs(email);
CREATE INDEX idx_contactus_suggestions ON ContactUs(suggestions);

-- Delete a specific contact request by ID

DELETE FROM ContactUs 
WHERE Id = 1;
-- Delete all entries from the table (Use with caution ⚠️)
DELETE FROM ContactUs;
-- Delete entries older than a certain date (e.g., 30 days old)
DELETE FROM ContactUs
WHERE created_at < NOW() - INTERVAL '30 days';