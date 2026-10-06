import { useEffect, useState } from 'react';
import { getDestinations, getPackages, getTestimonials } from './api.js';
import ContactForm from './components/ContactForm.jsx';
import DestinationCard from './components/DestinationCard.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import PackageCard from './components/PackageCard.jsx';
import Testimonials from './components/Testimonials.jsx';

const initialState = {
  destinations: [],
  packages: [],
  testimonials: [],
};

export default function App() {
  const [content, setContent] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadContent() {
      try {
        const [destinationsResponse, packagesResponse, testimonialsResponse] = await Promise.all([
          getDestinations(),
          getPackages(),
          getTestimonials(),
        ]);

        setContent({
          destinations: destinationsResponse.data,
          packages: packagesResponse.data,
          testimonials: testimonialsResponse.data,
        });
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadContent();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {error && (
          <div className="notice error" role="alert">
            {error}
          </div>
        )}

        <section className="section" id="destinasi">
          <div className="section-heading">
            <p className="eyebrow">Destinasi Unggulan</p>
            <h2>Tempat terbaik untuk perjalanan berikutnya</h2>
            <p>
              Pilihan destinasi populer dengan pengalaman lokal yang autentik dan pemandangan yang tak terlupakan.
            </p>
          </div>

          {isLoading ? (
            <div className="loading-grid">
              <span />
              <span />
              <span />
            </div>
          ) : (
            <div className="destination-grid">
              {content.destinations.map((destination) => (
                <DestinationCard destination={destination} key={destination.id} />
              ))}
            </div>
          )}
        </section>

        <section className="section why-section">
          <div className="section-heading centered">
            <p className="eyebrow">Kenapa Kami</p>
            <h2>Liburan lebih mudah dari rencana sampai pulang</h2>
          </div>
          <div className="benefit-grid">
            <article>
              <span>🧭</span>
              <h3>Itinerary Fleksibel</h3>
              <p>Rencana perjalanan bisa disesuaikan dengan minat, durasi, dan budget Anda.</p>
            </article>
            <article>
              <span>🤝</span>
              <h3>Pemandu Lokal</h3>
              <p>Tim lokal berpengalaman membantu Anda menikmati destinasi dengan lebih aman.</p>
            </article>
            <article>
              <span>💳</span>
              <h3>Harga Transparan</h3>
              <p>Detail fasilitas, harga, dan jadwal tertulis jelas sebelum perjalanan dimulai.</p>
            </article>
          </div>
        </section>

        <section className="section packages-section" id="paket">
          <div className="section-heading">
            <p className="eyebrow">Paket Wisata</p>
            <h2>Pilih paket perjalanan favorit Anda</h2>
            <p>
              Mulai dari liburan romantis, wisata budaya, hingga petualangan laut bersama tim profesional.
            </p>
          </div>

          {isLoading ? (
            <div className="loading-grid">
              <span />
              <span />
              <span />
            </div>
          ) : (
            <div className="package-grid">
              {content.packages.map((tourPackage) => (
                <PackageCard tourPackage={tourPackage} key={tourPackage.id} />
              ))}
            </div>
          )}
        </section>

        {!isLoading && <Testimonials testimonials={content.testimonials} />}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
