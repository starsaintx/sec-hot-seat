// src/app/page.tsx
import Link from "next/link";
import { coaches } from "../data/coaches";

function formatMoney(value: number) {
  return `$${(value / 1_000_000).toFixed(1)}M`;
}

function levelLabel(level: string) {
  switch (level) {
    case "safe":
      return "Safe";
    case "warm":
      return "Warm";
    case "hot":
      return "Hot";
    case "nuclear":
      return "Nuclear 🔥";
    default:
      return level;
  }
}

export default function HomePage() {
  const sorted = [...coaches].sort(
    (a, b) => b.hotSeatScore - a.hotSeatScore
  );

  return (
    <div className="page-container">
      <section className="top-panel">
        <div className="top-panel-main">
          <h2>Current SEC Coaching Heat Index</h2>
          <p>
            Ranked by <strong>Hot Seat Score</strong> (0–100). Higher score =
            hotter seat, more noise, and more message board meltdowns.
          </p>
        </div>
        <aside className="top-panel-aside">
          <h3>Get Coaching Change Alerts</h3>
          <p>
            Drop your email and we&apos;ll ping you when a major SEC coaching
            move or credible rumor breaks.
          </p>
          {/* TODO: connect this to your email system / NetScore / GHL */}
          <form className="email-form" action="#" method="post">
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <button type="submit">Notify Me</button>
            <p className="email-form-note">
              Coming soon: text alerts &amp; premium rumor feed.
            </p>
          </form>
        </aside>
      </section>

      <section className="coach-grid">
        {sorted.map((coach) => (
          <Link
            key={coach.id}
            href={`/coach/${coach.id}`}
            className="coach-card"
          >
            <div className="coach-card-header">
              <h3>{coach.team}</h3>
              <span className={`heat-badge heat-${coach.hotSeatLevel}`}>
                {levelLabel(coach.hotSeatLevel)}
              </span>
            </div>
            <p className="coach-name">{coach.coachName}</p>
            <p className="coach-record">
              Record: {coach.overallRecord} ({coach.conferenceRecord} SEC)
            </p>
            <p className="coach-hot-score">
              Hot Seat Score: <strong>{coach.hotSeatScore}/100</strong>
            </p>
            <p className="coach-buyout">
              Buyout Now: <strong>{formatMoney(coach.buyoutNow)}</strong>
            </p>
            <p className="coach-summary">{coach.summary}</p>
            <p className="coach-link">View full breakdown →</p>
          </Link>
        ))}
      </section>

      <section className="monetization-strip">
        <h3>Future Monetization Slots</h3>
        <ul>
          <li>Fan gear (affiliate) &amp; team-specific merch blocks</li>
          <li>Premium “Insider” rumor feed at $3/mo</li>
          <li>Sportsbook partner odds &amp; promo codes</li>
        </ul>
      </section>
    </div>
  );
}
