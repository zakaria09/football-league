
export interface Fixture {
  id: number;
  home: string;
  away: string;
}

export interface Scores extends Fixture {
  homeScore: number;
  awayScore: number;
  draw: boolean;
  winner: string | null;
}

export interface Games {
  fixtures: Fixture[];
  scores: Scores[];
};
