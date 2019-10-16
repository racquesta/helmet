const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
