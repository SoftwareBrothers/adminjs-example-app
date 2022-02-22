export interface ProductListInterface {
  products: {
    quantity: number;
    product: {
      id: number;
      name: string;
      price: number;
    };
  }[];
}

export interface ProductSumInterface {
  id: number;
  sum: number;
}
