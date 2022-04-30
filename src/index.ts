import express from 'express';
import { db } from './database/db';
import { Router } from 'express';
import { routes } from './routes';

const app = express();
app.use(routes);



app.listen(3030, () => {
    db.sync();
    console.log("App Running");
})