import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './Components/home-page/home-page';
import { NotFoundPage } from './Components/not-found-page/not-found-page';

@Component({
  imports: [RouterOutlet, HomePage, NotFoundPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('nestora');
}
