import { Injectable } from '@angular/core';

export interface Fixture {
  home: string;
  away: string;
}

export interface Fixtures {
  id: number;
  fixture: Fixture[];
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  index = 0;

  teams: Array<string> = [];
  fixtures: Fixtures[] = []


  constructor() { }

  addTeam(team: string) {
    this.teams.push(team);
  }

  addFixture(fixture: Fixture[]) {
    this.index += 1;
    this.fixtures.push({ id: this.index, fixture });
  }

}
