import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from "../components/footer/footer.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {CartService} from "./pages/cart/cart.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [
      RouterOutlet,
      FooterComponent,
      NavbarComponent,
      MatButton,
      MatToolbar
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

    constructor(private cartService: CartService) {
    }
    ngOnInit() {
        const cartId = localStorage.getItem('cart_id');

        if(cartId)
            this.cartService.getCart(cartId);
    }
}
