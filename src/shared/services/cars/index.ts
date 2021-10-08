import { api } from "../api";
import { Car } from "../../models/Car";

export const listCars = async () => {
  const response = await api.get<Car[]>("/cars");

  return response.data;
};
