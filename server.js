import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("financial-stability-system backend is running.");
});

// Example placeholder route
app.get("/api/status", (req, res) => {
  res.json({
    system: "financial-stability-system",
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

// Add your JS-only logic here:
// app.post("/api/calculate", (req, res) => {
//   const result = yourCalculationFunction(req.body);
//   res.json(result);
// });

app.listen(PORT, () => {
  console.log(`financial-stability-system running on port ${PORT}`);
});
