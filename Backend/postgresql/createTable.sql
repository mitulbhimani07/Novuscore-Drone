-- Run the SQL script in your PostgreSQL database to create the ContactUs table.
CREATE TABLE ContactUs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Use Postman or any HTTP client to test the /api/contact endpoint:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "This is a test message."
}
-- Verify the data in the database:
SELECT * FROM ContactUs;
-- Order Data by Creation Date:
SELECT * FROM ContactUs ORDER BY created_at DESC;
-- Count Total Rows in the Table:
SELECT COUNT(*) FROM ContactUs;
--To delete a specific row based on a condition (e.g., id), use the following query:
DELETE FROM ContactUs WHERE id = 1;
--2. Delete Rows Based on a Condition
DELETE FROM ContactUs WHERE email = 'john@example.com';
--To delete all rows from the ContactUs table but keep the table structure, use:
DELETE FROM ContactUs;
--  Delete Rows Older Than a Specific Date
DELETE FROM ContactUs WHERE created_at < '2025-01-01';