import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    const result = await sql`CREATE TABLE IF NOT EXISTS Confirmed ( id SERIAL PRIMARY KEY, name TEXT, email TEXT, phone TEXT, confirmed BOOLEAN  );`;
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ error: e });
  }
}
