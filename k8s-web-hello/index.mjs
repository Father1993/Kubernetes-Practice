import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const helloMessage = `<h1>VERSION 3: Hello form the ${os.hostname()}</h1>`
    console.log(helloMessage);
    res.send(helloMessage);
})

app.listen(PORT, () => {
    console.log(`Web server iis listening at port ${PORT}`);
})