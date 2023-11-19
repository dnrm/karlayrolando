import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    const { name, email, phone, confirmed } = req.body;

    if (!name || !email || !phone) {
      return res
        .status(422)
        .send({ error: [{ message: "Fill all the fields!" }] });
    }

    console.log(name, email, phone, confirmed)

    const result =
      await sql`INSERT INTO Confirmed (name, email, phone, confirmed) VALUES (${req.body.name}, ${req.body.email}, ${req.body.phone}, ${req.body.confirmed});`;
    res.status(200).send({ out: result, message: "Confirmed!" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
}
