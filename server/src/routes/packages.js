import { Router } from 'express';
import { testimonials, tourPackages } from '../data.js';

const router = Router();

router.get('/packages', (req, res) => {
  res.json({ data: tourPackages });
});

router.get('/testimonials', (req, res) => {
  res.json({ data: testimonials });
});

export default router;
