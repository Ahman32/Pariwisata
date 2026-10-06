export default function Testimonials({ testimonials }) {
  return (
    <section className="section testimonials" id="testimoni">
      <div className="section-heading centered">
        <p className="eyebrow">Cerita Traveler</p>
        <h2>Pengalaman mereka bersama JelajahNusantara</h2>
        <p>
          Kami membantu traveler merencanakan perjalanan yang nyaman, aman, dan penuh cerita.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.id}>
            <div className="stars" aria-label={`${testimonial.rating} dari 5 bintang`}>
              {'★'.repeat(testimonial.rating)}
            </div>
            <p>“{testimonial.message}”</p>
            <div className="testimonial-author">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.city}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
