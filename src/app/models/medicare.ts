// Interfaces TypeScript: describen la forma de los datos que antes vivían en js/datos.js

export interface EspecialidadMedica {
  id: number;
  slug: string; // se usa en la ruta: /especialidad/:slug
  nombre: string;
  descripcion: string;
  imagen: string;
}

export interface ServicioMedico {
  id: number; // se usa en la ruta: /servicio/:id
  especialidadSlug: string;
  icono: string;
  nombre: string;
  descripcion: string;
  precio: number;
  conDescuento: boolean;
}

export interface Profesional {
  id: number;
  nombre: string;
  especialidad: string; // nombre de la especialidad
  valor: number;
}
