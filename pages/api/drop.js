import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    if (req.method ==="DELETE") {
        // drop table
        const response = await sql`DROP TABLE Confirmed;`;
    }
}