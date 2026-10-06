import express from 'express';
import cors from 'cors';
import destinationsRouter from './routes/destinations.js';
import packagesRouter from './routes/packages.js';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'JelajahNusantara API berjalan dengan baik.',
  });
});

app.use('/api/destinations', destinationsRouter);
app.use('/api', packagesRouter);
app.use('/api/contact', contactRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint tidak ditemukan.' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
});

app.listen(PORT, () => {
  console.log(`JelajahNusantara API berjalan di http://localhost:${PORT}/api`);
});
