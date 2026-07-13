import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState({ kind: '', msg: '' });

  const submit = (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setState({ kind: 'err', msg: 'Please enter a valid email address.' });
      return;
    }
    setState({ kind: 'ok', msg: `Thanks — we’ll write to ${value}.` });
    setEmail('');
  };

  return (
    <section className="nl" id="newsletter">
      <svg
        className="nl__leaf"
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
      <div className="shell nl__inner reveal">
        <span className="eyebrow">Stay in the loop</span>
        <h2>
          Subscribe to <br />
          our newsletter
        </h2>
        <p>
          One thoughtful email a month. Field notes, project stories and the
          occasional unfiltered opinion. No spam &mdash; ever.
        </p>
        <form className="nl__form" onSubmit={submit} noValidate>
          <input
            type="email"
            required
            placeholder="you@yourdomain.com"
            value={email}
            aria-label="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
              if (state.kind) setState({ kind: '', msg: '' });
            }}
          />
          <button type="submit" className="btn">
            Subscribe
          </button>
        </form>
        <div
          className={`nl__msg ${state.kind === 'ok' ? 'is-ok' : ''} ${
            state.kind === 'err' ? 'is-err' : ''
          }`}
          role="status"
          aria-live="polite"
        >
          {state.msg}
        </div>
      </div>
    </section>
  );
}
