import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  imports: [RouterOutlet, Footer, Navbar],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-gifs');
}
