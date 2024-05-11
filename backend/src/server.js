import express from 'express';
import cors from 'cors';
import foodRouter from './Routers/food.router.js';

const app = express();

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000' // No need for square brackets around a single origin
    })
);

app.use('/api/foods', foodRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});
