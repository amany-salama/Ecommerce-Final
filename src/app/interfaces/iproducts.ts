export interface Iproducts {
  id: number;
  title: string;
  name: string; //add for cart service
  quantity?: number;  // add for cart localstoage
  description: string;
  category: string;
  price: number;
  discountPercentage?: number; // Optional property
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string; 
}

export interface IProductsResponse {
  products: Iproducts[];
  total: number;
  skip: number;
  limit: number;
}
interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

