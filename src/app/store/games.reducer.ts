import { createReducer, on } from "@ngrx/store";
import { Fixture, Games, Scores } from "./games.model";
import * as Actions from './games.actions';

export interface State {
  fixtures: Fixture[];
  scores: Scores[];
}


export const initialState: Games = {
  fixtures: [],
  scores: []
};

export const reducers = createReducer(
  initialState,
  on(Actions.getFixtures, state => ({ ...state })),
  on(Actions.setFixtures, ( state: Games, { fixtures } ) => {
    console.log(fixtures);
    return { ...state, fixtures: [ ...state.fixtures, fixtures as any ] };
  } ),
  on(Actions.setScores, ( state: Games, { scores } ) => ({ ...scores, ...state }))
);
