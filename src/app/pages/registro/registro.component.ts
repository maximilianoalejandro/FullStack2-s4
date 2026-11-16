import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Formulario de registro con [(ngModel)]. Según la actividad, SIN validaciones:
// solo se enlazan los campos a un objeto TypeScript y se muestra lo ingresado.
@Component({
  imports: [NgIf, FormsModule, RouterLink],
  selector: 'app-registro',
  styleUrl: './registro.component.css',
  templateUrl: './registro.component.html',
})
export class Registro {
  paciente = this.pacienteVacio();
  enviado = false;

  private pacienteVacio() {
    return {
      nombre: '',
      usuario: '',
      correo: '',
      clave: '',
      repeticion: '',
      nacimiento: '',
      direccion: '',
    };
  }

  registrar(): void {
    // No se guarda ni se envía a ningún lado: solo mostramos el resultado
    this.enviado = true;
  }

  limpiar(): void {
    this.paciente = this.pacienteVacio();
    this.enviado = false;
  }
}
