import express from "express";
import cors from "cors";
import formRoutes from "./routes/emailroutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// STATIC PATH
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/forms", formRoutes);

export default app;
