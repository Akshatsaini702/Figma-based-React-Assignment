import { useState } from 'react';

const quotes = [
  {
    text: '“They didn’t just redesign our site — they helped us re-hear what we were saying. Every stakeholder walked out of the workshop feeling clearer.”',
    who: 'Priya Menon',
    role: 'Head of Brand, Northlight',
    initial: 'P',
  },
  {
    text: '“The kind of studio that pushes back on the brief in the best way. We shipped in eight weeks what our internal team had been circling for a year.”',
    who: 'Jordan Ellis',
    role: 'Founder, Ferry & Co',
    initial: 'J',
  },
  {
    text: '“Warm, sharp and refreshingly opinionated. They cared about our customers before we asked them to.”',
    who: 'Ana Fischer',
    role: 'Product Lead, Basil',
    initial: 'A',
  },
];

export default function Testimonial() {
  const [i, setI] = useState(0);
  const q = quotes[i];

  return (
    <section className="tm" id="stories">
      <div className="shell reveal">
        <div className="tm__eyebrow">
          What our customer <em>says</em> about us
        </div>
        <div className="tm__card">
          <p className="tm__quote">{q.text}</p>
          <div className="tm__who">
            <div className="tm__avatar" aria-hidden="true">
              {q.initial}
            </div>
            <div className="tm__meta">
              <strong>{q.who}</strong>
              <span>{q.role}</span>
            </div>
          </div>
        </div>
        <div className="tm__nav" role="tablist" aria-label="Testimonials">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              className={`tm__dot ${idx === i ? 'is-active' : ''}`}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              aria-selected={idx === i}
              role="tab"
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
