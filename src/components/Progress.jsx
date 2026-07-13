export default function Progress() {
  return (
    <section className="progress">
      <div className="shell progress__inner reveal">
        <div className="progress__side">
          <div className="progress__tri" aria-hidden="true" />
          <svg
            className="progress__wave"
            viewBox="0 0 400 120"
            aria-hidden="true"
          >
            <path
              d="M0,60 C60,10 120,110 200,60 C280,10 340,110 400,60"
              fill="none"
              stroke="var(--coral)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <span className="eyebrow">Our approach</span>
          <h2>
            See how we can help <br />
            you progress.
          </h2>
          <p>
            We move fast, but we don&rsquo;t skip the listening part. Every
            partnership starts with a workshop where we map out where you are,
            where you want to be, and where the friction actually lives.
          </p>
          <a
            href="#offer"
            className="progress__link"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('offer')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore what we offer
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
