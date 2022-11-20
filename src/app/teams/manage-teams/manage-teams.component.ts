import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-manage-teams',
  templateUrl: './manage-teams.component.html',
  styleUrls: ['./manage-teams.component.css']
})
export class ManageTeamsComponent implements OnInit {

  teams: Array<string> = [];

  myForm!: FormGroup;

  constructor(
    private teamsvc: TeamService
  ) { }

  ngOnInit() {
    this.teams = this.teamsvc.teams;

    this.myForm = new FormGroup({
      teamName: new FormControl(null, Validators.required)
    });
  }

  onSubmit(form: FormGroup) {
    if (this.myForm.valid) {
      this.teamsvc.addTeam(form.value.teamName);
      this.myForm.reset();
    }
  }

}
