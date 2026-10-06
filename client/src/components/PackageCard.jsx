const currencyFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export default function PackageCard({ tourPackage }) {
  return (
    <article className="package-card">
      <img src={tourPackage.image} alt={tourPackage.title} />
      <div className="package-content">
        <p className="eyebrow">{tourPackage.destination}</p>
        <h3>{tourPackage.title}</h3>
        <p className="package-duration">{tourPackage.duration}</p>
        <ul className="feature-list">
          {tourPackage.facilities.map((facility) => (
            <li key={facility}>{facility}</li>
          ))}
        </ul>
        <div className="tag-list">
          {tourPackage.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
        <div className="package-price">
          <span>Harga per orang</span>
          <strong>{currencyFormatter.format(tourPackage.price)}</strong>
        </div>
      </div>
    </article>
  );
}
