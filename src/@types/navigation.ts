declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  List: undefined;
  Details: undefined;
  Confirmation: undefined;
  Done: undefined;
  Schedule: undefined;
  App: undefined;
};
