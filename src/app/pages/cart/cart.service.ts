import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../../interfaces/product";
import {CartItem, MakeupCart} from "../../../interfaces/cart";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartSource = new BehaviorSubject<MakeupCart | null>(null);
    cartSource$ = this.cartSource.asObservable();

    constructor(private httpClient: HttpClient) {
    }

    getCart(id: string | null) {
        return this.httpClient.get<MakeupCart>(`http://localhost:3000/carts/${id}`).subscribe({
                next: cart => this.cartSource.next(cart)
            }
        )
    }

    setCart(cart: MakeupCart) {
        return this.httpClient.post<MakeupCart>(`http://localhost:3000/carts`, cart).subscribe({
                next: cart => this.cartSource.next(cart)
            }
        )
    }
    updateCart(cart: MakeupCart) {
        return this.httpClient.put<MakeupCart>(`http://localhost:3000/carts/${cart.id}`, cart).subscribe({
                next: cart => this.cartSource.next(cart)
            }
        )
    }

    getCurrentCartValue() {
        return this.cartSource.value;
    }

    addItemToCart(item: Product, quantity = 1) {
        const itemToAdd = this.mapProductToCartItem(item);
        const cart = this.getCurrentCartValue() ?? this.createCart();
        cart.items = this.addOrUpdateCart(cart.items, itemToAdd, quantity);
        this.updateCart(cart);
    }

    createCart(): MakeupCart {
        const cart = new MakeupCart();
        localStorage.setItem('cart_id', cart.id);
        this.setCart(cart);
        return cart;
    }

    removeItemFromBasket(id: number){
        const cart = this.getCurrentCartValue();
        if(!cart) return;
        const itemToDelete = cart.items.find(item=> item.id === id);
        if(itemToDelete){
            cart.items = cart.items.filter(item => item.id !== id);
        }

        if(cart.items.length > 0) this.updateCart(cart);
        else this.deleteCart(cart);
    }

    deleteCart(cart: MakeupCart){
        return this.httpClient.delete(`http://localhost:3000/carts/${cart.id}`).subscribe({
            next: () => {
                console.log("FROM DELETE CART METHOD");
                this.cartSource.next(null);
                localStorage.removeItem('cart_id');
            }
        })
    }

    private addOrUpdateCart(items: CartItem[], itemToAdd: CartItem, quantity: number): CartItem[] {
        const item = items.find(item => item.id === itemToAdd.id);
        if (item) item.quantity += quantity;
        else {
            console.log(items);
            itemToAdd.quantity = quantity;
            items.push(itemToAdd);
        }
        return items;
    }

    private mapProductToCartItem(item: Product): CartItem {
        return {
            id: item.id,
            brand: item.brand,
            name: item.name,
            price: item.price,
            price_sign: item.price_sign,
            api_featured_image: item.api_featured_image,
            quantity: 1
        }
    }
}
