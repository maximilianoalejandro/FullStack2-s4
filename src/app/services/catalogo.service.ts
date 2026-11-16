import { Service } from '@angular/core';
import { ESPECIALIDADES, PROFESIONALES, SERVICIOS } from '../data/datos';
import { EspecialidadMedica, Profesional, ServicioMedico } from '../models/medicare';

// Un solo lugar con los datos. Los componentes le piden lo que necesitan.
@Service()
export class Catalogo {
  obtenerEspecialidades(): EspecialidadMedica[] {
    return ESPECIALIDADES;
  }

  obtenerEspecialidad(slug: string): EspecialidadMedica | undefined {
    return ESPECIALIDADES.find((e) => e.slug === slug);
  }

  obtenerServiciosDe(slug: string): ServicioMedico[] {
    return SERVICIOS.filter((s) => s.especialidadSlug === slug);
  }

  obtenerServicio(id: number): ServicioMedico | undefined {
    return SERVICIOS.find((s) => s.id === id);
  }

  obtenerProfesionales(nombreEspecialidad?: string): Profesional[] {
    if (!nombreEspecialidad) {
      return PROFESIONALES;
    }
    return PROFESIONALES.filter((p) => p.especialidad === nombreEspecialidad);
  }
}
