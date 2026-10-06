export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="JelajahNusantara beranda">
        <span className="brand-mark">JN</span>
        <span>JelajahNusantara</span>
      </a>

      <nav className="nav-links" aria-label="Navigasi utama">
        <a href="#destinasi">Destinasi</a>
        <a href="#paket">Paket</a>
        <a href="#testimoni">Testimoni</a>
        <a href="#kontak">Kontak</a>
      </nav>

      <a className="nav-cta" href="#kontak">
        Rencanakan Trip
      </a>
    </header>
  );
}
