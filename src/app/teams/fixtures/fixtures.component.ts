import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TeamService } from 'src/app/services/team.service';
import { setFixtures } from 'src/app/store/games.actions';
import { Fixture } from 'src/app/store/games.model';

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
  fixtures: Fixture[] = [];

  constructor(
    private teamsvc: TeamService,
    private store: Store
  ) { }

  ngOnInit() {
    this.teams = [
      "dsbdifhosf",
      "zakariye"
    ];


    console.log(this.teams);

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
      this.fixtures.push({ id: new Date().getTime(), home, away })
    }
  }

  saveFixtures() {
    const fixtures = this.fixtures;
    this.store.dispatch(setFixtures({ fixtures }))
    this.fixtures = [];
  }

}
