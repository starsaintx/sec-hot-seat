// src/data/coaches.ts
export type HotSeatLevel = "safe" | "warm" | "hot" | "nuclear";

export interface Coach {
  id: string;
  team: string;
  conference: "SEC";
  coachName: string;
  hotSeatScore: number;
  hotSeatLevel: HotSeatLevel;
  overallRecord: string;
  conferenceRecord: string;
  contractEnd: string;
  buyoutNow: number;
  buyoutNote?: string;
  lastUpdated: string;
  summary: string;
  rumorLinks: {
    title: string;
    source: string;
    url: string;
    date: string;
  }[];
}

export const coaches: Coach[] = [
  {
    id: "bama-kalen-deboer",
    team: "Alabama",
    conference: "SEC",
    coachName: "Kalen DeBoer",
    hotSeatScore: 10,
    hotSeatLevel: "safe",
    overallRecord: "10–2",
    conferenceRecord: "7–1",
    contractEnd: "2030",
    buyoutNow: 18000000,
    buyoutNote: "Estimated; drops slightly after Jan 1.",
    lastUpdated: "2025-11-23",
    summary:
      "Winning at a high level. Unless Alabama collapses, this seat is ice cold.",
    rumorLinks: [
      {
        title: "DeBoer focused on building long-term foundation at Alabama",
        source: "Local Beat Writer",
        url: "https://example.com/alabama-deboer-long-term",
        date: "2025-11-10",
      },
    ],
  },
  {
    id: "a-and-m-mike-elko",
    team: "Texas A&M",
    conference: "SEC",
    coachName: "Mike Elko",
    hotSeatScore: 55,
    hotSeatLevel: "warm",
    overallRecord: "7–5",
    conferenceRecord: "4–4",
    contractEnd: "2031",
    buyoutNow: 22000000,
    buyoutNote: "Structured to decrease significantly after 2027.",
    lastUpdated: "2025-11-23",
    summary:
      "Aggie fans are restless after another up-and-down season. Not on fire yet, but expectations are high.",
    rumorLinks: [
      {
        title: "Boosters growing impatient after another 4–4 SEC year",
        source: "Rumor Mill",
        url: "https://example.com/aandm-boosters",
        date: "2025-11-18",
      },
    ],
  },
  {
    id: "florida-billy-napier",
    team: "Florida",
    conference: "SEC",
    coachName: "Billy Napier",
    hotSeatScore: 82,
    hotSeatLevel: "hot",
    overallRecord: "6–6",
    conferenceRecord: "3–5",
    contractEnd: "2028",
    buyoutNow: 26000000,
    buyoutNote: "Big number now; more manageable after the 2026 season.",
    lastUpdated: "2025-11-23",
    summary:
      "Another .500 season has Gator Nation loud and angry. Recruiting is the only thing cooling the seat at all.",
    rumorLinks: [
      {
        title: "Florida administration evaluating football program’s direction",
        source: "Statewide Columnist",
        url: "https://example.com/florida-evaluating",
        date: "2025-11-20",
      },
      {
        title: "Short list of potential Florida replacements surfaces online",
        source: "Message Board Insider",
        url: "https://example.com/florida-short-list",
        date: "2025-11-22",
      },
    ],
  },
  {
    id: "auburn-hugh-freeze",
    team: "Auburn",
    conference: "SEC",
    coachName: "Hugh Freeze",
    hotSeatScore: 68,
    hotSeatLevel: "hot",
    overallRecord: "7–5",
    conferenceRecord: "4–4",
    contractEnd: "2030",
    buyoutNow: 19000000,
    buyoutNote: "Buyout remains hefty for a few more years.",
    lastUpdated: "2025-11-23",
    summary:
      "Fanbase is split. Some see progress, others see the same inconsistency. A bad year next season turns this nuclear.",
    rumorLinks: [
      {
        title: "Auburn power brokers divided on Freeze’s future",
        source: "National Reporter",
        url: "https://example.com/auburn-divided",
        date: "2025-11-15",
      },
    ],
  },
];
