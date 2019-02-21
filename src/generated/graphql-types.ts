export type Maybe<T> = T | null;

export enum TeslaModel {
  Model_3 = "Model_3",
  ModelY = "Model_Y"
}

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Get a Tesla based on given model */
  Tesla?: Maybe<Tesla>;
  /** Get all available wheels for a given model */
  availableWheels?: Maybe<(Maybe<Wheel>)[]>;
}

export interface Tesla {
  id: string;

  model?: Maybe<string>;

  edition?: Maybe<string>;

  kwh?: Maybe<number>;

  range?: Maybe<number>;

  wheels?: Maybe<Wheel>;
}

export interface Wheel {
  id: string;

  name?: Maybe<string>;

  inch?: Maybe<number>;

  model?: Maybe<Tesla>;
}

export interface Mutation {
  /** Change wheels of given Tesla */
  pimpMyWheels?: Maybe<Tesla>;
}

// ====================================================
// Arguments
// ====================================================

export interface TeslaQueryArgs {
  model: TeslaModel;
}
export interface AvailableWheelsQueryArgs {
  model: TeslaModel;
}
export interface PimpMyWheelsMutationArgs {
  teslaId: string;

  wheelId: string;
}
