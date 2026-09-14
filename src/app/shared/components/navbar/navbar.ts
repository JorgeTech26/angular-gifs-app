import { Component } from '@angular/core';
import { NavbarItem } from './navbar-item/navbar-item';
import { NavbarBrand } from './navbar-brand/navbar-brand';
import { NavbarHamburger } from './navbar-hamburger/navbar-hamburger';

@Component({
  selector: 'app-navbar',
  imports: [NavbarItem, NavbarBrand, NavbarHamburger],
  templateUrl: './navbar.html',
})
export class Navbar {
  abrirMenu = false;
}
