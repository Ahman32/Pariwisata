export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="#home" aria-label="JelajahNusantara beranda">
          <span className="brand-mark">JN</span>
          <span>JelajahNusantara</span>
        </a>
        <p>
          Partner perjalanan untuk menjelajahi keindahan Indonesia dengan rencana yang rapi dan pengalaman lokal terbaik.
        </p>
      </div>
      <div className="footer-links">
        <a href="#destinasi">Destinasi</a>
        <a href="#paket">Paket</a>
        <a href="#kontak">Kontak</a>
      </div>
      <small>© {new Date().getFullYear()} JelajahNusantara. Semua hak dilindungi.</small>
    </footer>
  );
}
