import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-item.html',
})
export class NavbarItem {}
