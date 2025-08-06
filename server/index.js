import express from "express";
import cors from "cors";
import items from "./routes/items.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use("/items", items);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
