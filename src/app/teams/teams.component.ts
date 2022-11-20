import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Array<string> = [];

  constructor(
    private teamsvc: TeamService
  ) { }

  ngOnInit() {
    this.teams = this.teamsvc.teams;
  }

}
