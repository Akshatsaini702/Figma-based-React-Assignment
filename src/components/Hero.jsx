export default function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero__deco hero__deco--b" aria-hidden="true">
        B
      </span>
      <span className="hero__deco hero__deco--blob" aria-hidden="true" />
      <svg
        className="hero__deco hero__deco--leaf"
        viewBox="0 0 62 84"
        aria-hidden="true"
      >
        <path
          d="M31 4 C56 20 60 60 34 80 C8 60 10 20 31 4Z"
          fill="var(--violet)"
        />
        <path
          d="M31 8 C31 32 31 56 33 78"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="shell hero__inner">
        <h1>
          The thinkers and doers <br />
          we&rsquo;re changing the status <em>quo</em> with
        </h1>
        <p className="hero__sub">
          A studio for the curious &mdash; we partner with founders, designers
          and dreamers to build the things tomorrow will thank us for.
        </p>
        <div className="hero__ctas">
          <a
            href="#offer"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('offer')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn"
          >
            See what we do
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#stories"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('stories')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn--ghost"
          >
            Read a story
          </a>
        </div>
      </div>
    </section>
  );
}
