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