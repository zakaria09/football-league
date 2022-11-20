import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  homeTeam!: string;
  awayTeam!: string;

  firstSelections: string = '';

  fixturesForm!: FormGroup;

  teams: Array<string> = [];
  fixtures: Array<{ home: string; away: string }> = [];

  constructor(
    private teamsvc: TeamService
  ) { }

  ngOnInit() {
    this.teams = this.teamsvc.teams;

    this.fixturesForm = new FormGroup({
      'homeTeam': new FormControl(null, Validators.required),
      'awayTeam': new FormControl(null, Validators.required),
    });
  }

  setFirstValues(selectedValue: FormGroup) {
    this.firstSelections = selectedValue.value.homeTeam;
  }

  isEmpty() {
    return this.firstSelections === '';
  }

  isSame(name: string) {
    console.log(this.firstSelections)
    return this.firstSelections === name;
  }

  onSubmit(data: FormGroup) {
    if(this.fixturesForm.valid) {
      const { homeTeam: home, awayTeam: away } = data.value;
      this.fixtures.push({ home, away })
    }
  }

  saveFixtures() {
    this.teamsvc.addFixture(this.fixtures)
    this.fixtures = [];
  }

}
