const express = require('express');
const app = express();

const REGION = process.env.REGION_NAME || 'UNKNOWN';

app.get('/', (req, res) => {
  res.send(`
    <h1>🌍 Azure Geo Routing Demo</h1>
    <h2>Region: ${REGION}</h2>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
