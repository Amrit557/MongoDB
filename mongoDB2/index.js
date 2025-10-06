const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const app = express();

app.use(express.json()); // Middleware to parse JSON
connectDB();

app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('Student Management System API Running 🚀');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
