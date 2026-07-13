export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__deco--sq" aria-hidden="true" />
      <svg
        className="about__deco--wave"
        viewBox="0 0 520 120"
        aria-hidden="true"
      >
        <path
          d="M0,80 C90,20 180,140 300,60 C400,10 480,90 520,50"
          fill="none"
          stroke="var(--coral)"
          strokeWidth="1.6"
        />
      </svg>

      <div className="shell about__inner reveal">
        <div className="about__title">
          <span className="eyebrow">About us</span>
          <h2>
            Tomorrow should be <br />
            better than today.
          </h2>
        </div>
        <div className="about__body">
          <p>
            We&rsquo;re a small studio of designers, engineers and storytellers
            who believe better products come from better questions. Every brief
            starts by looking at what feels stuck &mdash; and asking what a
            kinder, smarter version could look like.
          </p>
          <p>
            The work spans branding, digital product and campaign, but the
            thread stays the same: sharp thinking, warm execution, and a bias
            toward the small details other people leave behind.
          </p>
        </div>
      </div>
    </section>
  );
}
