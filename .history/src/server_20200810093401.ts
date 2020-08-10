import express from 'express';
import routes from './'

const app = express();

app.use(routes);

app.listen(3000);