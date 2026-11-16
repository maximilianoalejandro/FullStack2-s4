import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Catalogo } from '../../services/catalogo.service';
import { EspecialidadMedica, ServicioMedico } from '../../models/medicare';
import { ServicioTarjeta } from '../../components/servicio-tarjeta/servicio-tarjeta.component';

// Una sola página para medicina-general, pediatria, dental y kinesiologia.
// El :slug de la URL decide qué datos se muestran.
@Component({
  imports: [NgFor, NgIf, FormsModule, RouterLink, ServicioTarjeta],
  selector: 'app-especialidad',
  styleUrl: './especialidad.component.css',
  templateUrl: './especialidad.component.html',
})
export class Especialidad {
  private ruta = inject(ActivatedRoute);
  private catalogo = inject(Catalogo);

  especialidad: EspecialidadMedica | undefined;
  servicios: ServicioMedico[] = [];
  busqueda = ''; // se conecta al input con [(ngModel)]

  constructor() {
    // paramMap se vuelve a emitir si navegamos de una especialidad a otra
    this.ruta.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.especialidad = this.catalogo.obtenerEspecialidad(slug);
      this.servicios = this.catalogo.obtenerServiciosDe(slug);
      this.busqueda = '';
    });
  }

  get serviciosFiltrados(): ServicioMedico[] {
    const texto = this.busqueda.trim().toLowerCase();
    return this.servicios.filter((s) => s.nombre.toLowerCase().includes(texto));
  }
}
