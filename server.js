const express = require("express");
const app = express();

// ใช้ port จาก Render หรือ fallback เป็น 3000
const PORT = process.env.PORT || 3000;

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});