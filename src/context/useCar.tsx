import React, { createContext, useContext, useState } from "react";
import { Car } from "../models/Car";

type RentalDate = {
  date: number;
  formatted: string;
};

type RentalPeriod = {
  start_date: RentalDate;
  end_date: RentalDate;
};

type CartContextData = {
  selectedCar: Car;
  selectedDates: RentalPeriod;
  saveSelectedCar: (car: Car) => void;
  saveSelectedDates: (dates: RentalPeriod) => void;
};

type CarProviderProps = {
  children: React.ReactNode;
};

const CarContext = createContext({} as CartContextData);

const CarProvider = ({ children }: CarProviderProps) => {
  const [selectedCar, setSelectedCar] = useState({} as Car);
  const [selectedDates, setSelectedDates] = useState({} as RentalPeriod);

  const saveSelectedCar = (car: Car) => {
    setSelectedCar(car);
  };

  const saveSelectedDates = (dates: RentalPeriod) => {
    setSelectedDates(dates);
  };

  return (
    <CarContext.Provider
      value={{ selectedCar, selectedDates, saveSelectedCar, saveSelectedDates }}
    >
      {children}
    </CarContext.Provider>
  );
};

const useCars = () => {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error("useCars must be used within CarProvider");
  }

  return context;
};

export { CarProvider, useCars };
