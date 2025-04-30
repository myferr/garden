import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.resolve("./GARDEN.json");

  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const garden = JSON.parse(fileContents);

    if (!garden.registered) {
      return res.status(404).json({ error: "'registered' key not found" });
    }

    // CORS headers to allow cross-origin requests
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any origin
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow necessary methods
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(garden.registered);
  } catch (err) {
    res.status(500).json({ error: "Could not load or parse garden.json" });
  }
}
