export type Product = {
  id: number | string;
  image: string;
  name: string;
  price: number | string;
  oldPrice: number | string;
  discount: string;
  paymentType: string[];
  descriptionPayment: Record<string, string>;
};
