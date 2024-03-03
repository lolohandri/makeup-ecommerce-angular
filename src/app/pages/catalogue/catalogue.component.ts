import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CatalogueService} from "./catalogue.service";
import {Product} from "../../../interfaces/product";
import {MatPaginator} from "@angular/material/paginator";
import {ProductItemComponent} from "../../../components/product-item/product-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect, MatSelectChange} from "@angular/material/select";
import {Selection} from "../../../interfaces/selection";
import {LoadingComponent} from "../../../components/loading/loading.component";

@Component({
    imports: [
        RouterOutlet,
        MatPaginator,
        ProductItemComponent,
        NgForOf,
        NgIf,
        MatFormField,
        MatOption,
        MatSelect,
        LoadingComponent
    ],
    selector: 'app-catalogue',
    standalone: true,
    styleUrl: './catalogue.component.css',
    templateUrl: './catalogue.component.html'
})
export class CatalogueComponent implements OnInit {
    products: Product[] = [];
    sorting: Selection[] = [
        {
            value: 'alphabetical',
            viewValue: 'Alphabetical'
        },
        {
            value: 'price desc',
            viewValue: 'Price Descending'
        },
        {
            value: 'price asc',
            viewValue: 'Price Ascending'
        }
    ];
    sortSelected : string = '';
    loading: boolean = false;

    constructor(private service: CatalogueService) { }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts(brand: string = '', product_category: string = 'powder', product_type: string = '') {
        this.loading = true;
        this.service.getProducts(brand, product_category, product_type).subscribe({
            next: response => {
                this.products = response;
                this.loading = false;
            },
            error: err => console.log(err)
        })
    }

    onSortSelected(event: MatSelectChange){
        this.sortSelected = event.value;
        if(this.sortSelected === 'alphabetical')
            this.products.sort((p1, p2) => p1.brand?.localeCompare(p2.brand));
        if(this.sortSelected === 'price asc')
            this.products.sort((p1, p2) => p1.price - p2.price);
        if(this.sortSelected === 'price desc')
            this.products.sort((p1, p2) => p2.price - p1.price);
    }
}
