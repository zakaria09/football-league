import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchesRoutingModule } from './matches-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatCardModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [MatchesComponent]
})
export class MatchesModule { }
