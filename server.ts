import express, { type Application, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routes/route';

dotenv.config();

const app: Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

export default app;