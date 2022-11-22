import { Injectable } from '@angular/core';

export interface Scores {
  id: number;
  home: string;
  homeScore: number;
  away: string;
  awayScore: number;
  gameFinished: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  index = 0;

  teams: Array<string> = [];


  constructor() { }

  addTeam(team: string) {
    this.teams.push(team);
  }


}
