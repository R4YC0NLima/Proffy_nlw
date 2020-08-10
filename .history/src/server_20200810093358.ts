import express from 'express';
import routes

const app = express();

app.use(routes);

app.listen(3000);