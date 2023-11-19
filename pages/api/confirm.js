import { sql } from "@vercel/postgres";

const userAlreadyExists = async (email) => {
  const result = await sql`SELECT * FROM Confirmed WHERE Email = ${email}`;
  return result.rowCount > 0;
};

export default async function handler(req, res) {
  try {
    const { name, email, phone, confirmed } = req.body;

    if (!name || !email || !phone) {
      let missingFields = [];

      if (!name) {
        missingFields.push("nombre");
      }
      if (!email) {
        missingFields.push("correo electrónico");
      }
      if (!phone) {
        missingFields.push("número de teléfono");
      }

      return res.status(400).send({
        error: [
          {
            message: `Datos faltantes: ${missingFields.join(", ")}`,
            missingFields,
          },
        ],
      });
    }

    const already = await userAlreadyExists(email);
    console.log(already)

    if (await userAlreadyExists(email)) {
      console.log("Ya se ha confirmado usando este correo electrónico")
      return res.status(400).send({
        error: [
          { message: "Ya se ha confirmado usando este correo electrónico" },
        ],
      });
    }

    const result =
      await sql`INSERT INTO Confirmed (name, email, phone, confirmed) VALUES (${req.body.name}, ${req.body.email}, ${req.body.phone}, ${req.body.confirmed});`;
    res.status(200).send({ out: result, message: "Confirmed!" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
}
