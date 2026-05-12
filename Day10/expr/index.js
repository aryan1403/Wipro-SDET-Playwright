const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => { // GET Endpoint
    res.json({ message: 'Hello World' });
});

app.get('/:name', (req, res) => { // GET Endpoint
    const name = req.params.name;
    res.json({ message: `Hello ${name}` });
});

app.listen(PORT, () => console.log(`App is running on PORT:${PORT}`))

