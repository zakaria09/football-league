import { createAction, props } from "@ngrx/store";
import { Fixture, Scores } from "./games.model";


export const getFixtures = createAction('[Fixtures] GET FIXTURES');

export const setFixtures = createAction(
  '[Fixtures] SET FIXTURES',
  props<{ fixtures: Fixture[] }>()
);

export const setScores = createAction('[Fixtures] GET SCORES', props<{ scores: Scores[] }>() );

