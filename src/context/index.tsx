import React from "react";
import { CarProvider } from "./useCar";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <CarProvider>{children}</CarProvider>
);

export default AppProvider;
