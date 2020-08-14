export interface Product {
  stock: number;
  rating: any;
  comments: any;
  id: number;
  name: string;
  description: string;
  code: string;
  tags: any;
  status: boolean;
  weight: number;
  volume: number;
  category: {id: number, name: string};
  measurementUnit: {id: number, name: string};
  isCombo: boolean;
  isRegistrationProduct: boolean;
  images: Array<any>;
}
