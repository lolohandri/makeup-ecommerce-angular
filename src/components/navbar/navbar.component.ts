import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatAnchor} from "@angular/material/button";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {CartService} from "../../app/pages/cart/cart.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        MatToolbar,
        RouterLink,
        RouterLinkActive,
        MatAnchor,
        NgOptimizedImage,
        MatIcon,
        NgIf
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
    constructor(public cartService: CartService) {
    }

}
