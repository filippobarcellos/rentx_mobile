interface Rent {
  period: string;
  price: number;
}

interface Accessories {
  type: string;
  name: string;
}

export interface Car {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: Rent;
  fuel_type: string;
  thumbnail: string;
  accessories: Accessories[];
  photos: string[];
}
