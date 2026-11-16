import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicioMedico } from '../../models/medicare';
import { moneda } from '../../utils/moneda';

// Tarjeta reutilizable: recibe un servicio desde el componente padre con @Input
@Component({
  imports: [NgIf, RouterLink],
  selector: 'app-servicio-tarjeta',
  styleUrl: './servicio-tarjeta.component.css',
  templateUrl: './servicio-tarjeta.component.html',
})
export class ServicioTarjeta {
  @Input({ required: true }) servicio!: ServicioMedico;

  precioTexto(): string {
    return moneda(this.servicio.precio);
  }
}
