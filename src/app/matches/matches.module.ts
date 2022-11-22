import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchesRoutingModule } from './matches-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [MatchesComponent]
})
export class MatchesModule { }
