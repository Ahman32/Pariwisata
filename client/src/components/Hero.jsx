export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Wisata Indonesia Terpilih</p>
        <h1>Temukan pengalaman liburan terbaik di Nusantara.</h1>
        <p className="hero-description">
          Jelajahi pantai tropis, pegunungan megah, kota budaya, dan surga bawah laut dengan itinerary yang dirancang khusus untuk Anda.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#destinasi">
            Lihat Destinasi
          </a>
          <a className="button secondary" href="#paket">
            Pilih Paket
          </a>
        </div>
        <div className="hero-stats" aria-label="Statistik layanan">
          <div>
            <strong>50+</strong>
            <span>Destinasi</span>
          </div>
          <div>
            <strong>12K+</strong>
            <span>Traveler</span>
          </div>
          <div>
            <strong>4.9</strong>
            <span>Rating</span>
          </div>
        </div>
      </div>

      <div className="hero-card" aria-label="Kartu destinasi unggulan">
        <img
          src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80"
          alt="Pemandangan tropis Bali"
        />
        <div className="floating-card">
          <span>Trip Terfavorit</span>
          <strong>Bali Escape</strong>
          <small>4 hari 3 malam mulai Rp2,8 jt</small>
        </div>
      </div>
    </section>
  );
}
