import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

// Import routes
import categoryRoute from "./routes/CategoryRoute";
import expenseRoute from "./routes/ExpenseRoute";

// Create app with CORS and JSON
const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Set routes
app.use("/category", categoryRoute);
app.use("/expense", expenseRoute);

// Invalid routes - error 404
app.use((req: Request, res: Response) => {
  res.status(404).send("Error 404: Page not found.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).send(err.stack);
});
