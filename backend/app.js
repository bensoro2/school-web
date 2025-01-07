require("dotenv").config();
const express = require("express");
const authRoutes = require("./src/routes/auth");
const transactionRoutes = require("./src/routes/transaction");
const projectRoutes = require("./src/routes/project");
const subsidyRoutes = require("./src/routes/subsidy");
const fiscalYearRoutes = require("./src/routes/fiscalYear");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL // ต้องตั้งค่า environment variable นี้ใน Render
        : "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/projects", projectRoutes);
app.use("/subsidies", subsidyRoutes);
app.use("/fiscal-years", fiscalYearRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
