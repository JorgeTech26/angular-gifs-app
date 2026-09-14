import { Component, model } from '@angular/core';
import { NavbarItem } from '../navbar-item/navbar-item';

@Component({
  selector: 'app-navbar-hamburger',
  imports: [NavbarItem],
  templateUrl: './navbar-hamburger.html',
})
export class NavbarHamburger {
  abrirMenu = model(false);
}
