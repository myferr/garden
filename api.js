import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.resolve("./GARDEN.json");

  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(fileContents);
  } catch (err) {
    res.status(500).json({ error: "Could not load garden." });
  }
}
