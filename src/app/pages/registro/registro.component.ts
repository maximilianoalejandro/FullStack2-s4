import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  clavesCoinciden,
  edadMinima13,
  requiereMayuscula,
  requiereNumero,
} from '../../utils/validadores';

// Formulario de registro reactivo (FormGroup + formControlName).
// Todos los campos son obligatorios salvo la dirección.
@Component({
  imports: [NgIf, ReactiveFormsModule, RouterLink],
  selector: 'app-registro',
  styleUrl: './registro.component.css',
  templateUrl: './registro.component.html',
})
export class Registro {
  private readonly fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group(
    {
      nombre: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      clave: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
          requiereMayuscula,
          requiereNumero,
        ],
      ],
      repeticion: ['', [Validators.required]],
      nacimiento: ['', [Validators.required, edadMinima13]],
      direccion: [''], // opcional
    },
    { validators: clavesCoinciden },
  );

  enviado = false;
  mensaje = '';

  registrar(): void {
    if (this.formulario.invalid) {
      // Marca todos los campos para que aparezcan sus errores
      this.formulario.markAllAsTouched();
      this.enviado = false;
      this.mensaje = 'Revisa los campos marcados antes de enviar.';
      return;
    }
    // No se guarda ni se envía a ningún lado: solo se muestra el resultado
    this.enviado = true;
    this.mensaje = 'Registro enviado correctamente (demostración).';
  }

  limpiar(): void {
    this.formulario.reset();
    this.enviado = false;
    this.mensaje = '';
  }

  /** true si el campo es inválido y el usuario ya lo tocó o se intentó enviar */
  invalido(campo: string): boolean {
    const control = this.formulario.get(campo);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  /** true si el campo tiene ese error de validación */
  tieneError(campo: string, error: string): boolean {
    return !!this.formulario.get(campo)?.hasError(error);
  }
}
