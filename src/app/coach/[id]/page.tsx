// src/app/coach/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { coaches, type Coach } from "../../../data/coaches";

function formatMoney(value: number) {
  return `$${(value / 1_000_000).toFixed(1)}M`;
}

function levelLabel(level: Coach["hotSeatLevel"]) {
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

function levelDescription(level: Coach["hotSeatLevel"]) {
  switch (level) {
    case "safe":
      return "Fans are mostly calm. A few message board complainers, but no real heat.";
    case "warm":
      return "Chatter is picking up. Another mediocre year and this gets very interesting.";
    case "hot":
      return "The radio shows and boosters are loud. A bad loss away from a full-on crisis.";
    case "nuclear":
      return "Everything is on fire. Buyout math is being done on napkins in every bar in town.";
    default:
      return "";
  }
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function CoachPage({ params }: PageProps) {
  const coach = coaches.find((c) => c.id === params.id);

  if (!coach) {
    return notFound();
  }

  return (
    <div className="detail-page">
      <Link href="/" className="back-link">
        ← Back to all SEC coaches
      </Link>

      <section className="detail-header">
        <div>
          <h2>
            {coach.team} — {coach.coachName}
          </h2>
          <p className="detail-meta">
            SEC • Overall: {coach.overallRecord} • Conference:{" "}
            {coach.conferenceRecord}
          </p>
          <p className="detail-updated">
            Last updated: {coach.lastUpdated}
          </p>
        </div>
        <div className="detail-heat-box">
          <p className="heat-label">{levelLabel(coach.hotSeatLevel)}</p>
          <p className="heat-score">{coach.hotSeatScore}/100</p>
          <p className="heat-desc">{levelDescription(coach.hotSeatLevel)}</p>
        </div>
      </section>

      <section className="detail-body">
        <div className="detail-main">
          <h3>Why the Seat Looks Like This</h3>
          <p>{coach.summary}</p>

          <h3>Contract &amp; Buyout</h3>
          <ul className="detail-list">
            <li>
              <strong>Contract through:</strong> {coach.contractEnd}
            </li>
            <li>
              <strong>Current estimated buyout:</strong>{" "}
              {formatMoney(coach.buyoutNow)}
            </li>
            {coach.buyoutNote && (
              <li>
                <strong>Notes:</strong> {coach.buyoutNote}
              </li>
            )}
          </ul>

          <p className="detail-note">
            Disclaimer: All figures are best estimates based on public reports
            and may not be exact.
          </p>

          <h3>Rumor Feed (Manual v1)</h3>
          {coach.rumorLinks.length === 0 && (
            <p>No notable rumors added yet. Check back soon.</p>
          )}
          <ul className="rumor-list">
            {coach.rumorLinks.map((rumor) => (
              <li key={rumor.url}>
                <a
                  href={rumor.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rumor-link"
                >
                  {rumor.title}
                </a>{" "}
                <span className="rumor-meta">
                  ({rumor.source} — {rumor.date})
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="detail-sidebar">
          <div className="alert-box">
            <h4>Want Instant Coaching Alerts?</h4>
            <p>
              In the next version, we&apos;ll offer{" "}
              <strong>$3/mo insider alerts</strong> when jobs open, interviews
              are reported, and deals are close.
            </p>
            <p>
              For now, join the early interest list using the form on the home
              page.
            </p>
          </div>

          <div className="ad-box">
            <h4>Future Merch / Ad Spot</h4>
            <p>
              This is where we&apos;ll plug fan gear, affiliate offers, or
              sportsbook promos targeted to {coach.team} fans.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
