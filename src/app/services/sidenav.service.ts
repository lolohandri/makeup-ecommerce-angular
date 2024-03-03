import { Injectable } from '@angular/core';
import {MatDrawer, MatSidenav} from "@angular/material/sidenav";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
    private drawer?: MatDrawer;
    constructor() {
    }


    public setSidenav(drawer: MatDrawer) {
        this.drawer = drawer;
    }

    public open() {
        return this.drawer?.open();
    }


    public close() {
        return this.drawer?.close();
    }

    public toggle(): void {
        this.drawer?.toggle();
    }
}
