import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Catalogo } from '../../services/catalogo.service';
import { EspecialidadMedica, Profesional, ServicioMedico } from '../../models/medicare';
import { moneda } from '../../utils/moneda';

// Una sola página de detalle para los 12 servicios: lee el :id de la URL.
@Component({
  imports: [NgFor, NgIf, RouterLink],
  selector: 'app-detalle-servicio',
  styleUrl: './detalle-servicio.component.css',
  templateUrl: './detalle-servicio.component.html',
})
export class DetalleServicio {
  private ruta = inject(ActivatedRoute);
  private catalogo = inject(Catalogo);

  servicio: ServicioMedico | undefined;
  especialidad: EspecialidadMedica | undefined;
  profesionales: Profesional[] = [];

  constructor() {
    this.ruta.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.servicio = this.catalogo.obtenerServicio(id);
      if (this.servicio) {
        this.especialidad = this.catalogo.obtenerEspecialidad(this.servicio.especialidadSlug);
        this.profesionales = this.catalogo.obtenerProfesionales(this.especialidad?.nombre);
      } else {
        this.especialidad = undefined;
        this.profesionales = [];
      }
    });
  }

  precio(valor: number): string {
    return moneda(valor);
  }
}
