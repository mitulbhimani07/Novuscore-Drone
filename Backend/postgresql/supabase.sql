CREATE POLICY "Enable insert for all users"
ON "ContactUs"
FOR INSERT
TO public
WITH CHECK (true);
