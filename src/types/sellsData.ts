import { TShoesData } from "./shoesData";

export type TSellsData = {
  quantity?: number;
  date: string;
  buyer: string;
  shoes: TShoesData;
  _id: string;
};
