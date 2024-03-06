import { TSellsData } from "./sellsData";

export type TShoe = {
  quantity: number;
  date: Date;
  buyer: string;
  shoesImage: string;
  name: string;
  id: string;
  _id: string;
};

export type TRequestedProduct = {
  status: string;
  requestedProduct: TSellsData;
  _id: string;
};
