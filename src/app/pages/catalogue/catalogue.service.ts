import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../../interfaces/product";

@Injectable({
    providedIn: 'root'
})
export class CatalogueService {
    constructor(private httpClient: HttpClient) {
    }

    getProducts(brand?: string, product_category?: string, product_type?: string): Observable<Product[]> {
        let params = new HttpParams();
        if (brand) params = params.append('brand', brand);
        if (product_category) params = params.append('product_category', product_category);
        if (product_type) params = params.append('product_type', product_type);

        return this.httpClient.get<Product[]>('http://makeup-api.herokuapp.com/api/v1/products.json', {params});
    }

    getProductById(id: number): Observable<Product> {
        return this.httpClient.get<Product>(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
    }

}
