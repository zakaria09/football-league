import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixturesComponent } from './fixtures/fixtures.component';
import { ManageTeamsComponent } from './manage-teams/manage-teams.component';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TeamsComponent
  },
  {
    path: ':teams',
    component: TeamsComponent,
    children: [
      {
        path: 'fixtures',
        component: FixturesComponent
      },
      {
        path: 'manage-teams',
        component: ManageTeamsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
