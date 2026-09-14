import { Component } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-home-page',
  imports: [GifList],
  templateUrl: './home-page.html',
})
export class HomePage {}
