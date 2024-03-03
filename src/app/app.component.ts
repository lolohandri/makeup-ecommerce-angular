import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from "../components/footer/footer.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {CartService} from "./services/cart.service";
import {MatDrawer, MatDrawerContainer, MatSidenav, MatSidenavContent} from "@angular/material/sidenav";
import {SidenavService} from "./services/sidenav.service";
import {CartSidenavComponent} from "../components/cart-sidenav/cart-sidenav.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports:
        [
            RouterOutlet,
            FooterComponent,
            NavbarComponent,
            MatButton,
            MatToolbar,
            MatDrawer,
            MatDrawerContainer,
            MatSidenavContent,
            CartSidenavComponent
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
    @ViewChild(MatDrawer) public drawer?: MatDrawer;

    constructor(private cartService: CartService, private sidenavService: SidenavService) {
    }
    ngOnInit() {

    }

    ngAfterViewInit() {
        const cartId = localStorage.getItem('cart_id');
        if(cartId)
            this.cartService.getCart(cartId);
        if(this.drawer)
            this.sidenavService.setSidenav(this.drawer);
    }
}
