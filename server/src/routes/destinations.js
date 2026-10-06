import { Router } from 'express';
import { destinations } from '../data.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ data: destinations });
});

router.get('/:id', (req, res) => {
  const destination = destinations.find((item) => item.id === req.params.id);

  if (!destination) {
    return res.status(404).json({ message: 'Destinasi tidak ditemukan.' });
  }

  return res.json({ data: destination });
});

export default router;
