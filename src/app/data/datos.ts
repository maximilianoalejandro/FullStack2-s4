import { EspecialidadMedica, Profesional, ServicioMedico } from '../models/medicare';

// Datos estáticos del sitio (antes estaban repetidos en 5 HTML y en js/datos.js)

export const ESPECIALIDADES: EspecialidadMedica[] = [
  { id: 1, slug: 'medicina-general', nombre: 'Medicina General', descripcion: 'Atención integral para toda la familia.', imagen: 'assets/img/medicina-general.jpg' },
  { id: 2, slug: 'pediatria', nombre: 'Pediatría', descripcion: 'Cuidado especializado para los más pequeños.', imagen: 'assets/img/pediatria.jpg' },
  { id: 3, slug: 'dental', nombre: 'Dental', descripcion: 'Sonrisas sanas con atención profesional.', imagen: 'assets/img/dental.jpg' },
  { id: 4, slug: 'kinesiologia', nombre: 'Kinesiología', descripcion: 'Recupera tu movilidad y bienestar físico.', imagen: 'assets/img/kinesiologia.jpg' },
];

export const SERVICIOS: ServicioMedico[] = [
  // Medicina General
  { id: 1, especialidadSlug: 'medicina-general', icono: '🩺', nombre: 'Consulta General', descripcion: 'Evaluación médica completa con diagnóstico y receta.', precio: 18990, conDescuento: true },
  { id: 2, especialidadSlug: 'medicina-general', icono: '💉', nombre: 'Control de Presión', descripcion: 'Chequeo y seguimiento de hipertensión arterial.', precio: 12990, conDescuento: false },
  { id: 3, especialidadSlug: 'medicina-general', icono: '🧪', nombre: 'Exámenes Preventivos', descripcion: 'Panel de laboratorio básico con interpretación médica.', precio: 24990, conDescuento: true },
  // Pediatría
  { id: 4, especialidadSlug: 'pediatria', icono: '🧸', nombre: 'Control del Niño Sano', descripcion: 'Seguimiento de crecimiento, peso y desarrollo infantil.', precio: 16990, conDescuento: true },
  { id: 5, especialidadSlug: 'pediatria', icono: '💊', nombre: 'Consulta Pediátrica', descripcion: 'Atención por enfermedades comunes de la infancia.', precio: 19990, conDescuento: false },
  { id: 6, especialidadSlug: 'pediatria', icono: '💉', nombre: 'Vacunación', descripcion: 'Administración de vacunas según calendario nacional.', precio: 14990, conDescuento: true },
  // Dental
  { id: 7, especialidadSlug: 'dental', icono: '🦷', nombre: 'Consulta Dental', descripcion: 'Evaluación bucal y plan de tratamiento personalizado.', precio: 15990, conDescuento: false },
  { id: 8, especialidadSlug: 'dental', icono: '✨', nombre: 'Limpieza Dental', descripcion: 'Destartraje y pulido para prevenir caries y sarro.', precio: 22990, conDescuento: true },
  { id: 9, especialidadSlug: 'dental', icono: '🪥', nombre: 'Ortodoncia', descripcion: 'Evaluación y control de frenillos para alinear tu sonrisa.', precio: 29990, conDescuento: true },
  // Kinesiología
  { id: 10, especialidadSlug: 'kinesiologia', icono: '🤸', nombre: 'Rehabilitación Muscular', descripcion: 'Terapia para recuperar lesiones y fortalecer músculos.', precio: 20990, conDescuento: true },
  { id: 11, especialidadSlug: 'kinesiologia', icono: '🦵', nombre: 'Terapia Deportiva', descripcion: 'Tratamiento de lesiones y prevención para deportistas.', precio: 23990, conDescuento: false },
  { id: 12, especialidadSlug: 'kinesiologia', icono: '🧘', nombre: 'Kinesiología Respiratoria', descripcion: 'Ejercicios para mejorar la capacidad y función pulmonar.', precio: 17990, conDescuento: true },
];

export const PROFESIONALES: Profesional[] = [
  { id: 1, nombre: 'Dra. Carla Rojas', especialidad: 'Medicina General', valor: 18990 },
  { id: 2, nombre: 'Dr. Luis Fuentes', especialidad: 'Medicina General', valor: 18990 },
  { id: 3, nombre: 'Dra. Paula Núñez', especialidad: 'Pediatría', valor: 21990 },
  { id: 4, nombre: 'Dr. Marco Díaz', especialidad: 'Pediatría', valor: 21990 },
  { id: 5, nombre: 'Dra. Ana Soto', especialidad: 'Dental', valor: 25990 },
  { id: 6, nombre: 'Dr. Pedro Lagos', especialidad: 'Dental', valor: 25990 },
  { id: 7, nombre: 'Klgo. Jorge Vera', especialidad: 'Kinesiología', valor: 16990 },
  { id: 8, nombre: 'Klga. María Pinto', especialidad: 'Kinesiología', valor: 16990 },
];
