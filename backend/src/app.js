const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup, route configuration, database connections, etc.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
