import { useState } from 'react';
import { sendContactMessage } from '../api.js';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await sendContactMessage(formData);
      setStatus({ type: 'success', message: response.message });
      setFormData(initialForm);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section contact-section" id="kontak">
      <div className="contact-copy">
        <p className="eyebrow">Mulai Perjalanan</p>
        <h2>Butuh itinerary khusus? Konsultasikan dengan tim kami.</h2>
        <p>
          Ceritakan destinasi impian, jumlah peserta, dan gaya perjalanan Anda. Kami akan membantu menyiapkan rekomendasi terbaik.
        </p>
        <div className="contact-info">
          <span>📍 Jakarta, Indonesia</span>
          <span>☎ +62 812-3456-7890</span>
          <span>✉ halo@jelajahnusantara.id</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nama Lengkap
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama Anda"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nama@email.com"
            required
          />
        </label>
        <label>
          Nomor Telepon
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0812-3456-7890"
          />
        </label>
        <label>
          Pesan
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ceritakan rencana liburan Anda"
            rows="5"
            required
          />
        </label>

        {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}

        <button className="button primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>
    </section>
  );
}
