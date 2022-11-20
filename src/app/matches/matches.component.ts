import { Component, OnInit } from '@angular/core';
import { Fixtures, TeamService } from '../services/team.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  allFixtures: Fixtures[] = [];

  constructor(
    private teamsvc: TeamService
  ) { }

  ngOnInit() {
    console.log('matches', this.allFixtures = this.teamsvc.fixtures);
  }

}
