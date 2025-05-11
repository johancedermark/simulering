const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Servera statiska filer från public/
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servern kör på http://localhost:${port}`);
});
