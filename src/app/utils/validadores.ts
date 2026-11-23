import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validadores del formulario de registro. Cada uno ignora el valor vacío:
// de eso se encarga Validators.required en cada control.

/** Grupo: la contraseña y su repetición deben ser iguales. */
export const clavesCoinciden: ValidatorFn = (grupo: AbstractControl): ValidationErrors | null => {
  const clave = grupo.get('clave')?.value as string | undefined;
  const repeticion = grupo.get('repeticion')?.value as string | undefined;
  if (!clave || !repeticion) return null;
  return clave === repeticion ? null : { clavesDistintas: true };
};

/** Control: al menos una letra mayúscula. */
export const requiereMayuscula: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const valor = String(control.value ?? '');
  if (!valor) return null;
  return /[A-ZÁÉÍÓÚÜÑ]/.test(valor) ? null : { sinMayuscula: true };
};

/** Control: al menos un número. */
export const requiereNumero: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const valor = String(control.value ?? '');
  if (!valor) return null;
  return /\d/.test(valor) ? null : { sinNumero: true };
};

/** Control: fecha real (YYYY-MM-DD), no futura, y con 13 años cumplidos. */
export const edadMinima13: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const valor = String(control.value ?? '').trim();
  if (!valor) return null;

  const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valor);
  if (!partes) return { fechaInvalida: true };

  const anio = Number(partes[1]);
  const mes = Number(partes[2]);
  const dia = Number(partes[3]);
  const fecha = new Date(anio, mes - 1, dia);

  // Date corrige fechas imposibles (31 de febrero): si cambió, no era real.
  if (fecha.getFullYear() !== anio || fecha.getMonth() !== mes - 1 || fecha.getDate() !== dia) {
    return { fechaInvalida: true };
  }

  const hoy = new Date();
  const ahora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  if (fecha > ahora) return { fechaFutura: true };

  let edad = ahora.getFullYear() - anio;
  const aunNoCumple =
    ahora.getMonth() < mes - 1 || (ahora.getMonth() === mes - 1 && ahora.getDate() < dia);
  if (aunNoCumple) edad -= 1;

  return edad >= 13 ? null : { edadMinima: true };
};
