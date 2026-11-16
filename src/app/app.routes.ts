import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio.component';
import { Especialidad } from './pages/especialidad/especialidad.component';
import { DetalleServicio } from './pages/detalle-servicio/detalle-servicio.component';
import { Registro } from './pages/registro/registro.component';

export const routes: Routes = [
  { path: '', component: Inicio },
  // Una sola vista para las 4 especialidades (antes 4 HTML casi iguales)
  { path: 'especialidad/:slug', component: Especialidad },
  // Una sola vista para cualquier servicio
  { path: 'servicio/:id', component: DetalleServicio },
  { path: 'registro', component: Registro },
  { path: '**', redirectTo: '' },
];
