import cuid from "cuid";

export interface CartItem{
    id: number;
    brand: string;
    name: string;
    price: number;
    price_sign: string;
    api_featured_image: string;
    quantity: number;
}

export interface Cart{
    id: string;
    items: CartItem[];
}

export class MakeupCart implements Cart{
    id = cuid();
    items: CartItem[] = [];

}
