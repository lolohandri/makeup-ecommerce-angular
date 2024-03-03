import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../../interfaces/product";
import {NgForOf, NgIf} from "@angular/common";
import {CartItem} from "../../../interfaces/cart";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-cart',
  standalone: true,
    imports: [
        NgForOf,
        MatButton,
        NgIf
    ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    constructor(public cartService: CartService) {
    }

    removeItem(id: number){
        this.cartService.removeItemFromBasket(id);
    }
}
