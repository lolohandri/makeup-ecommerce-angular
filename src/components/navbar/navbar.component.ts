import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatAnchor, MatButton} from "@angular/material/button";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {CartService} from "../../app/services/cart.service";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {SidenavService} from "../../app/services/sidenav.service";

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
        NgIf,
        MatDrawerContainer,
        MatDrawer,
        MatButton
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
    constructor(public cartService: CartService, private sidenavService: SidenavService) {
    }

    toggleSidenav(){
        this.sidenavService.toggle();
    }
}
