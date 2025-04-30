import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  // Handle preflight requests (OPTIONS method)
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any origin
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow necessary methods
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
    return res.status(200).end(); // Respond with 200 OK for OPTIONS request
  }

  // Handle GET requests
  if (req.method === "GET") {
    const filePath = path.resolve("./GARDEN.json"); // Path to your garden data

    try {
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const garden = JSON.parse(fileContents);

      if (!garden.registered) {
        return res.status(404).json({ error: "'registered' key not found" });
      }

      // Set CORS headers to allow access from any domain
      res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any origin
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow necessary methods
      res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers

      res.setHeader("Content-Type", "application/json");
      return res.status(200).json(garden.registered);
    } catch (err) {
      return res.status(500).json({ error: "Could not load or parse garden.json" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
