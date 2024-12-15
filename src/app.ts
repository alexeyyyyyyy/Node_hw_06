
import express, { Application } from 'express';
import companyRoutes from './routes/companyRoutes';


const app: Application = express();


app.use(express.json());


app.use('/api/company', companyRoutes);
export default app;
