export interface ProductsResponse {
  items: Product[];
}

export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number | null;
  category: string;
  product_type: string;
  tag_list: string[];
  api_featured_image: string;
  product_colors: ProductColor[];

}

export interface ProductColor{
  hex_value: string;
  colour_name: string;
}
