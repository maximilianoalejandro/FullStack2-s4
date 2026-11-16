import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './components/encabezado/encabezado.component';
import { Pie } from './components/pie/pie.component';

@Component({
  imports: [RouterOutlet, Encabezado, Pie],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {}
