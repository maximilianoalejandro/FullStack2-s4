import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Catalogo } from '../../services/catalogo.service';
import { EspecialidadMedica } from '../../models/medicare';

@Component({
  imports: [NgFor, RouterLink, RouterLinkActive],
  selector: 'app-encabezado',
  styleUrl: './encabezado.component.css',
  templateUrl: './encabezado.component.html',
})
export class Encabezado {
  private catalogo = inject(Catalogo);
  especialidades: EspecialidadMedica[] = this.catalogo.obtenerEspecialidades();
}
