const express = require('express');
const app = express();

app.get('/*',function(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Request from ${ip}`);
    res.send(ip);
});

app.listen(3000, () => console.log(`Server is listening on port 3000`));
