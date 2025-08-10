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
  const itemIds = input.map((it) => it.item_id);

  try {
    if (!itemIds.length) return res.status(400).json({ message: "No items" });

    const placeholders = itemIds.map(() => "?").join(", ");

    const rows = db
      .prepare(`SELECT * FROM items WHERE item_id IN (${placeholders})`)
      .all(...itemIds);

    // Merge counts by item_id
    const countsMap = Object.fromEntries(
      input.map((it) => [it.item_id, Number(it.count)])
    );
    const merged = rows.map((r) => ({
      ...r,
      count: countsMap[r.item_id] ?? null,
    }));

    res.json(merged);
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

export default items;
