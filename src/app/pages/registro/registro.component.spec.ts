import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Registro } from './registro.component';

describe('Registro (formulario reactivo)', () => {
  let fixture: ComponentFixture<Registro>;
  let componente: Registro;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registro],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Registro);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('detecta un correo electrónico incorrecto', () => {
    // Arrange
    const correo = componente.formulario.controls.correo;

    // Act
    correo.setValue('correo-sin-a@a..rroba.cl');

    // Assert
    expect(correo.valid).toBeFalse();
    expect(componente.formulario.valid).toBeFalse();
  });

  it('el botón Limpiar restablece los datos y el mensaje', () => {
    // Arrange: formulario con datos y un mensaje mostrado
    componente.formulario.patchValue({ nombre: 'Ana Pérez', correo: 'ana@ejemplo.cl' });
    componente.registrar(); // formulario incompleto: deja un mensaje de error
    fixture.detectChanges();
    expect(componente.mensaje).not.toBe('');

    // Act: se hace clic en el botón Limpiar
    const botones = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const limpiar = Array.from(botones).find((b) => b.textContent?.includes('Limpiar'))!;
    limpiar.click();
    fixture.detectChanges();

    // Assert
    expect(componente.formulario.getRawValue().nombre).toBe('');
    expect(componente.formulario.getRawValue().correo).toBe('');
    expect(componente.mensaje).toBe('');
    expect(componente.enviado).toBeFalse();
  });

  // Prueba A: validador de GRUPO (compara dos campos, por eso el error queda en el formulario)
  it('marca error de grupo cuando las contraseñas no coinciden', () => {
    // Arrange / Act: dos contraseñas distintas
    componente.formulario.patchValue({ clave: 'Abc123', repeticion: 'Abc124' });

    // Assert: el error está en el grupo, no en un campo
    expect(componente.formulario.hasError('clavesDistintas')).toBeTrue();
    expect(componente.formulario.controls.repeticion.hasError('clavesDistintas')).toBeFalse();

    // Act: ahora iguales
    componente.formulario.patchValue({ repeticion: 'Abc123' });

    // Assert: el error desaparece
    expect(componente.formulario.hasError('clavesDistintas')).toBeFalse();
  });

  // Prueba E: componente y plantilla juntos (formulario válido -> mensaje visible en el HTML)
  it('muestra el mensaje de éxito en pantalla al enviar datos válidos', () => {
    // Arrange: datos válidos, sin dirección (es opcional)
    componente.formulario.setValue({
      nombre: 'Ana Pérez',
      usuario: 'ana2026',
      correo: 'ana@ejemplo.cl',
      clave: 'Abc123',
      repeticion: 'Abc123',
      nacimiento: '2000-05-10',
      direccion: '',
    });
    const html = fixture.nativeElement as HTMLElement;
    const mensaje = html.querySelector('.estado-formulario') as HTMLElement;
    expect(mensaje.textContent?.trim()).toBe(''); // antes de enviar no hay mensaje

    // Act: clic en el botón Registrar (dispara ngSubmit)
    (html.querySelector('button[type="submit"]') as HTMLButtonElement).click();
    fixture.detectChanges(); // sin esto la vista no se actualiza

    // Assert: el mensaje aparece en el DOM
    expect(mensaje.textContent).toContain('Registro enviado correctamente');
    expect(mensaje.classList).toContain('exito');
  });
});
