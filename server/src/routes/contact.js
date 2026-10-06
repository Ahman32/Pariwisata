import { Router } from 'express';

const router = Router();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', (req, res) => {
  const { name, email, phone = '', message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: 'Nama, email, dan pesan wajib diisi.',
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Format email tidak valid.',
    });
  }

  return res.status(201).json({
    message: 'Terima kasih! Pesan Anda sudah kami terima.',
    data: {
      name,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
    },
  });
});

export default router;
