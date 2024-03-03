import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CatalogueComponent} from "./pages/catalogue/catalogue.component";
import {Page404Component} from "./pages/404/404.component";
import {CartComponent} from "./pages/cart/cart.component";
import {ProductItemComponent} from "../components/product-item/product-item.component";

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", title: "Home", component: HomeComponent},
    {path: "catalogue", title: "Catalogue", component: CatalogueComponent},
    {path: "cart", title: "Cart", component: CartComponent},
    {path: "**", component: Page404Component, pathMatch: "full"}
];
