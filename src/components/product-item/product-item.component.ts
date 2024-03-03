import {Component, Input} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {Product} from "../../interfaces/product";
import {MatAnchor, MatButton} from "@angular/material/button";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {CartService} from "../../app/services/cart.service";

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardImage,
        MatCardContent,
        MatCardActions,
        MatButton,
        NgIf,
        RouterLink,
        MatAnchor,
        MatIcon,
        NgForOf,
        NgStyle
    ],
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
    @Input() product?: Product;

    constructor(private cartService: CartService) {
    }

    addItemToCart() {
        this.product && this.cartService.addItemToCart(this.product);
    }
}
