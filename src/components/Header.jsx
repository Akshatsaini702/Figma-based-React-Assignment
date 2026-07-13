import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#offer', label: 'What we offer' },
  { href: '#stories', label: 'Stories' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`hdr ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell hdr__row">
        <a
          href="#top"
          className="brand"
          onClick={(e) => handleNav(e, '#top')}
          aria-label="Status Quo home"
        >
          status<span className="brand__dot">.</span>quo
        </a>

        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hdr__cta">
          <a
            href="#newsletter"
            onClick={(e) => handleNav(e, '#newsletter')}
            className="btn btn--pill-sm"
          >
            Get started
          </a>
          <button
            type="button"
            className={`hdr__burger ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`hdr__mobile ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={(e) => handleNav(e, '#newsletter')}
            className="btn btn--pill-sm"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
