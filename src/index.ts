import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('init');
})

app.listen(port);

export default app;