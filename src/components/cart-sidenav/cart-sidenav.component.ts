import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {CartService} from "../../app/services/cart.service";

@Component({
  selector: 'app-cart-sidenav',
  standalone: true,
    imports: [
        MatButton,
        NgForOf,
        NgIf
    ],
  templateUrl: './cart-sidenav.component.html',
  styleUrl: './cart-sidenav.component.css'
})
export class CartSidenavComponent {
    constructor(public cartService: CartService) {
    }

    removeItem(id: number){
        this.cartService.removeItemFromBasket(id);
    }
}
