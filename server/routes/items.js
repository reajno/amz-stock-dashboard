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

items.post("/", (req, res) => {
  const input = req.body;
  const itemIds = input.map((item) => item.item_id);
  try {
    if (!itemIds.length) {
      return res.status(400).json({ error: { message: "No items found" } });
    }

    const placeholders = itemIds.map(() => "?").join(", ");

    const rows = db
      .prepare(`SELECT * FROM items WHERE item_id IN (${placeholders})`)
      .all(...itemIds);

    if (!rows.length) {
      return res.status(400).json({ error: { message: "No items found" } });
    }
    // Merge counts by item_id
    const countsMap = Object.fromEntries(
      input.map((item) => [item.item_id, Number(item.count)])
    );
    const merged = rows.map((row) => ({
      ...row,
      count: countsMap[row.item_id] ?? null,
    }));
    res.json(merged);
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

export default items;
