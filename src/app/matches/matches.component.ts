import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  allFixtures: any[] = [];

  fixtureScores = [];

  constructor(
    private teamsvc: TeamService
  ) { }

  ngOnInit() {
    this.allFixtures = [
      {
          "id": 1,
          "fixture": [
              {
                  "home": "dsbdifhosf",
                  "away": "zakariye"
              },
              {
                  "home": "ouhfodshf",
                  "away": "zakariye"
              },
              {
                  "home": "sdbcisd]",
                  "away": "ouhfodshf"
              },
              {
                  "home": "sdbcisd]",
                  "away": "dsbdifhosf"
              }
          ]
      },
      {
          "id": 2,
          "fixture": [
              {
                  "home": "dsbdifhosf",
                  "away": "zakariye"
              },
              {
                  "home": "ouhfodshf",
                  "away": "zakariye"
              }
          ]
      }
  ];
  }


  setScores(id: number) {

  }

}
