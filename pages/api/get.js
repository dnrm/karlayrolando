import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    const result = await sql`SELECT * FROM Confirmed;`;
    res.status(200).send(result?.rows);
  } catch (e) {
    res.status(500).send({ error: e });
  }
}
