import React from "react";

export type TShoesData = {
  name: string;
  id: string;
  price: number;
  quantity: number;
  releaseDate: string;
  brand: string;
  model: string;
  style: string;
  size: string;
  color: string;
  shoesImage: string;
  _id: string;
  _v?: string;
};

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
