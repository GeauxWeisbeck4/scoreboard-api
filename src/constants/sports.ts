const BASE_URL = "https://www.espn.com";

const SPORTS = {
  MLB: "MLB",
  NBA: "NBA",
  NFL: "NFL",
  NCAAM: "NCAAM",
  NCAAF: "NCAAF",
};

const SPORT_URL_MAP = {
  [SPORTS.MLB]: "mlb",
  [SPORTS.NBA]: "nba",
  [SPORTS.NFL]: "nfl",
  [SPORTS.NCAAM]: "mens-college-basketball",
  [SPORTS.NCAAF]: "college-football",
};

const getSportURL = (sport: string) =>
  !SPORT_URL_MAP[sport]
    ? console.error("Sport not found")
    : `${BASE_URL}/${SPORT_URL_MAP[sport]}/scoreboard`;

export { SPORTS, SPORT_URL_MAP, getSportURL };
