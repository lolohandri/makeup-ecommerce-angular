import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-404',
  standalone: true,
    imports: [
        MatAnchor,
        RouterLink,
        MatButton
    ],
  templateUrl: './404.component.html',
  styleUrl: './404.component.css'
})
export class Page404Component {
    constructor(private location: Location) {
    }

    prevPage(){
        this.location.back();
    }
}
