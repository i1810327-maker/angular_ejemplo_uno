import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentePrueba } from './componentes/componente-prueba/componente-prueba';
import { CuartoComponente } from './componentes/cuarto-componente/cuarto-componente';
import { TercerComponente } from './componentes/tercer-componente/tercer-componente';
import { SegundoComponente } from './componentes/segundo-componente/segundo-componente';
import { PrimerComponente } from './componentes/primer-componente/primer-componente';
import { FormularioComponente } from './componentes/formulario-componente/formulario-componente';
import { TablasComponente } from './componentes/tablas-componente/tablas-componente';

@Component({
  imports: [RouterOutlet, ComponentePrueba, PrimerComponente, SegundoComponente, TercerComponente, CuartoComponente, FormularioComponente, TablasComponente] ,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  
})
export class App {
  protected readonly title = signal('angular_ejemplo_uno');
}

