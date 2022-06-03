const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: "Hello World Ignite!" });
});

app.listen(3000, () => {
    console.log('Server Ok port 3000');
});


