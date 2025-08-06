import { Router } from "express";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../db/items.db");

const db = new Database(dbPath);
const items = Router();

items.get("/", (req, res) => {
  const statement = db.prepare("SELECT * FROM items");
  const rows = statement.all();
  res.json(rows);
});

export default items;
