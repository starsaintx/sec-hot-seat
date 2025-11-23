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

function levelTagline(level: string) {
  switch (level) {
    case "safe":
      return "Seat is ice cold. Message boards are mostly calm.";
    case "warm":
      return "Grumbling has started. One more bad year = real heat.";
    case "hot":
      return "Talk radio and boosters are loud. Things are tense.";
    case "nuclear":
      return "Everything is on fire. Buyout math is being done at tailgates.";
    default:
      return "";
  }
}

export default function HomePage() {
  const sorted = [...coaches].sort(
    (a, b) => b.hotSeatScore - a.hotSeatScore
  );

  return (
    <div className="page-shell">
      {/* Hero */}
      <section className="hero">
        <div className="hero-main">
          <div className="hero-pill-row">
            <span className="hero-pill">SEC • Coaching Carousel</span>
            <span className="hero-pill hero-pill-hot">
              Live Hot Seat Index
            </span>
          </div>
          <h2 className="hero-title">Who&apos;s getting fired next?</h2>
          <p className="hero-sub">
            A fan-made dashboard tracking <strong>SEC coaching heat, buyouts,</strong> and{" "}
            <strong>rumor chatter</strong> — ranked in real time by Hot Seat Score.
          </p>
          <div className="hero-metrics">
            <div className="hero-metric">
              <span className="hero-metric-label">Coaches Tracked</span>
              <span className="hero-metric-value">{coaches.length}</span>
            </div>
            <div className="hero-metric">
              <span className="hero-metric-label">Hottest Seat</span>
              <span className="hero-metric-value hero-metric-hot">
                {sorted[0]?.team ?? "TBD"}
              </span>
            </div>
            <div className="hero-metric">
              <span className="hero-metric-label">Max Buyout (Est.)</span>
              <span className="hero-metric-value">
                {formatMoney(
                  Math.max(...coaches.map((c) => c.buyoutNow))
                )}
              </span>
            </div>
          </div>
        </div>

        <aside className="hero-aside">
          <h3 className="hero-aside-title">Get breaking coaching alerts</h3>
          <p className="hero-aside-copy">
            When a seat goes from warm to nuclear, you&apos;ll be first to know.
            Early access list for <strong>$3/mo Insider Alerts</strong> is opening soon.
          </p>
          {/* TODO: connect to your email system / NetScore / GHL */}
          <form className="email-form" action="#" method="post">
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <button type="submit">Join Early List</button>
            <p className="email-form-note">
              No spam. Just pure coaching chaos, delivered.
            </p>
          </form>
        </aside>
      </section>

      {/* Leaderboard */}
      <section className="leaderboard">
        <div className="leaderboard-header">
          <div>
            <h3 className="leaderboard-title">SEC Hot Seat Leaderboard</h3>
            <p className="leaderboard-sub">
              Sorted by Hot Seat Score (0–100). Higher = hotter seat, louder fans.
            </p>
          </div>
          <div className="leaderboard-legend">
            <span className="legend-dot legend-safe" /> Safe
            <span className="legend-dot legend-warm" /> Warm
            <span className="legend-dot legend-hot" /> Hot
            <span className="legend-dot legend-nuclear" /> Nuclear
          </div>
        </div>

        <div className="coach-grid">
          {sorted.map((coach, index) => (
            <Link
              key={coach.id}
              href={`/coach/${coach.id}`}
              className="coach-card"
            >
              <div className="coach-rank">
                <span>#{index + 1}</span>
              </div>
              <div className="coach-main">
                <div className="coach-top-row">
                  <div>
                    <p className="coach-team">{coach.team}</p>
                    <p className="coach-name">{coach.coachName}</p>
                  </div>
                  <span className={`heat-badge heat-${coach.hotSeatLevel}`}>
                    {levelLabel(coach.hotSeatLevel)}
                  </span>
                </div>

                <div className="coach-meta-row">
                  <p className="coach-record">
                    Record: {coach.overallRecord}{" "}
                    <span className="coach-record-conf">
                      ({coach.conferenceRecord} SEC)
                    </span>
                  </p>
                  <p className="coach-hot-score">
                    Hot Seat Score{" "}
                    <span className="coach-hot-score-value">
                      {coach.hotSeatScore}/100
                    </span>
                  </p>
                </div>

                <div className="coach-bottom-row">
                  <div className="coach-buyout-block">
                    <span className="coach-buyout-label">Est. Buyout</span>
                    <span className="coach-buyout-value">
                      {formatMoney(coach.buyoutNow)}
                    </span>
                  </div>
                  <p className="coach-tagline">
                    {levelTagline(coach.hotSeatLevel)}
                  </p>
                </div>

                <p className="coach-summary">{coach.summary}</p>
                <p className="coach-link">View full breakdown →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Monetization strip */}
      <section className="monetization-strip">
        <h3>Built for SEC sickos &amp; future monetization</h3>
        <ul>
          <li>Team-specific fan gear &amp; affiliate drops</li>
          <li>$3/mo Insider rumor + alert feed when we flip it on</li>
          <li>Sportsbook &amp; partner promos slotted by fanbase</li>
        </ul>
      </section>
    </div>
  );
}
