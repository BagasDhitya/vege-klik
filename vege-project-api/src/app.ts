import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import vegetableRouter from "./routes/vegetable.route";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.use("/api/vegetables", vegetableRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
