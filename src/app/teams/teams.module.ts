import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { ManageTeamsComponent } from './manage-teams/manage-teams.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/games.reducer';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    StoreModule.forFeature('games', reducers)
  ],
  declarations: [
    TeamsComponent,
    ManageTeamsComponent,
    FixturesComponent
  ]
})
export class TeamsModule { }
