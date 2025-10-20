const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to EFA Backend' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
