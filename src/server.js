import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
