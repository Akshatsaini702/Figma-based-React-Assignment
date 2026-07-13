const columns = [
  {
    title: 'Studio',
    links: ['About', 'Team', 'Careers', 'Press'],
  },
  {
    title: 'Work',
    links: ['Case studies', 'Clients', 'Approach', 'Ethics'],
  },
  {
    title: 'Contact',
    links: ['hello@statusquo.co', 'London · Bengaluru', '+91 98xxxxxxxx'],
  },
];

const socials = [
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <path
        d="M19 4.5L14.5 10.5L20 20H15L11 13.5L6 20H3.5L9 12.5L4 4.5H9L12.5 10.5L17 4.5H19Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity=".15" />
        <path
          d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 10v7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="ft" id="contact">
      <div className="shell">
        <div className="ft__grid">
          <div>
            <div className="ft__brand">
              status<span style={{ color: 'var(--coral)' }}>.</span>quo
            </div>
            <p className="ft__blurb">
              A small studio for founders and teams who want the next thing they
              build to feel a little more human.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="ft__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ft__bar">
          <span>© {new Date().getFullYear()} Status Quo Studio. All rights reserved.</span>
          <div className="ft__socials" aria-label="Social links">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
