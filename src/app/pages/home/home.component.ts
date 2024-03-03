import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    RouterLinkActive,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
