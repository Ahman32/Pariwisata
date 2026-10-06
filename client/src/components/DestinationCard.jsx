const currencyFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <img src={destination.image} alt={`Pemandangan ${destination.name}`} />
      <div className="card-content">
        <div className="card-meta">
          <span>{destination.location}</span>
          <strong>⭐ {destination.rating}</strong>
        </div>
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
        <div className="tag-list">
          {destination.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
        <div className="card-footer">
          <span>Mulai dari</span>
          <strong>{currencyFormatter.format(destination.priceFrom)}</strong>
        </div>
      </div>
    </article>
  );
}
