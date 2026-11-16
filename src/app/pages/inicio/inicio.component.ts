import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Catalogo } from '../../services/catalogo.service';
import { EspecialidadMedica } from '../../models/medicare';

@Component({
  imports: [NgFor, NgIf, RouterLink],
  selector: 'app-inicio',
  styleUrl: './inicio.component.css',
  templateUrl: './inicio.component.html',
})
export class Inicio {
  private catalogo = inject(Catalogo);
  especialidades: EspecialidadMedica[] = this.catalogo.obtenerEspecialidades();

  // Reemplaza a inicio.js: antes se creaba y borraba un <p> con el DOM,
  // ahora solo cambia este booleano y *ngIf muestra u oculta el consejo.
  mostrarConsejo = false;
  consejo = 'Reserva controles preventivos una vez al año: cuidar la salud a tiempo evita tratamientos mayores.';

  alternarConsejo(): void {
    this.mostrarConsejo = !this.mostrarConsejo;
  }
}
