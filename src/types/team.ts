export interface TeamColors {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  bgDeep: string;
}

export interface ScheduleGame {
  week: number;
  opponent: string;
  opponentLogo?: string;
  date: string;
  time?: string;
  location: string;
  result?: 'W' | 'L';
  score?: string;
}

export interface RosterPlayer {
  name: string;
  position: string;
  team: string;
  points?: number;
}

export interface MerchandiseItem {
  name: string;
  price: string;
  image: string;
}

export interface TeamData {
  id: string;
  name: string;
  nameLine1: string;
  nameLine2: string;
  /** clamp() string or px/rem value — applied to line 1 font-size */
  nameLine1Size?: string;
  /** clamp() string or px/rem value — applied to line 2 font-size */
  nameLine2Size?: string;
  /** color key: 'white' | 'accent' | 'secondary' | 'primary' */
  nameLine1Color?: 'white' | 'accent' | 'secondary' | 'primary';
  nameLine2Color?: 'white' | 'accent' | 'secondary' | 'primary';
  /** CSS object-position for the hero image, e.g. 'center top' */
  heroObjectPosition?: string;
  division: string;
  stadium: string;
  location: string;
  tagline: string;
  record: string;
  pointsScored: number;
  divisionRank: number;
  winStreak: number;
  logoPath: string;
  heroImagePath: string;
  colors: TeamColors;
  schedule: ScheduleGame[];
  starters: RosterPlayer[];
  bench: RosterPlayer[];
  draftPicks: { year: number; round: number; from?: string }[];
  nextGame: {
    opponent: string;
    opponentLogo?: string;
    date: string;
    time: string;
    city: string;
  };
  merchandise: MerchandiseItem[];
}
