import { Car } from "../models/Car";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  List: undefined;
  Details: {
    car: Car;
  };
  Confirmation: undefined;
  Done: undefined;
  Schedule: undefined;
};
