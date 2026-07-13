import { useState } from 'react';

const items = [
  {
    num: '01',
    label: 'Collaborate & partnership',
    detail:
      'Long-form partnerships and short, focused sprints. Whichever shape fits, we plug into your team like we belong.',
  },
  {
    num: '02',
    label: 'We talk about your weights',
    detail:
      'Every project carries baggage &mdash; legacy tech, org politics, past decisions. We name them out loud so nothing derails the work later.',
  },
  {
    num: '03',
    label: 'Fixing digital confidence',
    detail:
      'From brand systems to product UX &mdash; we build the surface people actually see, and back it with the language people can actually trust.',
  },
];

export default function Offerings() {
  const [openIdx, setOpenIdx] = useState(null);

  const onActivate = (i) => (e) => {
    e.preventDefault();
    setOpenIdx((v) => (v === i ? null : i));
  };

  return (
    <section className="offer" id="offer">
      <div className="shell reveal">
        <div className="offer__head">
          <h2>
            What we can <br />
            offer you!
          </h2>
          <p>
            Three ways we tend to show up. Every engagement gets shaped around
            the room it walks into &mdash; but this is the shape of the work.
          </p>
        </div>

        <ul className="offer__list" role="list">
          {items.map((it, i) => (
            <li key={it.num}>
              <a
                href="#"
                className="offer__item"
                onClick={onActivate(i)}
                aria-expanded={openIdx === i}
              >
                <span className="offer__num">{it.num}</span>
                <span
                  className="offer__label"
                  dangerouslySetInnerHTML={{ __html: it.label }}
                />
                <span className="offer__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <div
                className="offer__detail"
                style={{
                  maxHeight: openIdx === i ? 200 : 0,
                  opacity: openIdx === i ? 1 : 0,
                  overflow: 'hidden',
                  transition:
                    'max-height .4s ease, opacity .3s ease, padding .3s ease',
                  padding: openIdx === i ? '0 4px 22px 132px' : '0 4px 0 132px',
                  color: 'var(--ink-soft)',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  borderBottom:
                    openIdx === i ? '1px solid var(--line)' : '1px solid transparent',
                }}
                dangerouslySetInnerHTML={{ __html: it.detail }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
