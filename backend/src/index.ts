import 'dotenv/config';
import express from 'express';
import openaiRoute from './routes/openaiRoute';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use('/api/generateImage', openaiRoute);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
