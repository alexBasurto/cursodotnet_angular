import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Cambiar el locale de la app. Cambiamos el idioma de la aplicación a nivel global
// Importar los idiomas deseados (por lo general será solo el castellano (es))
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
// Ahora los registramos
import { registerLocaleData } from '@angular/common';

// Componentes
import { AppComponent } from './app.component';
import { BindingComponent } from './introduccion/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './introduccion/directivas/directivas.component';
import { ActividadNgForComponent } from './introduccion/actividad-ng-for/actividad-ng-for.component';
import { AmigosComponent } from './introduccion/amigos/amigos.component';
import { TareasComponent } from './introduccion/tareas/tareas.component';
import { FormularioUsuariosComponent } from './formularios/formulario-usuarios/formulario-usuarios.component';
import { FormularioClientesComponent } from './formularios/formulario-clientes/formulario-clientes.component';
import { FormularioUsuariosMejoradoComponent } from './formularios/formulario-usuarios-mejorado/formulario-usuarios-mejorado.component';
import { AngularPipesComponent } from './pipes/angular-pipes/angular-pipes.component';
import { PipesPersonalizadosComponent } from './pipes/pipes-personalizados/pipes-personalizados.component';
import { AlmacenamientoArchivosPipe } from './pipes/almacenamiento-archivos.pipe';
import { AlmacenamientoArchivosMultiplePipe } from './pipes/almacenamiento-archivos-multiple.pipe';
import { DistanciasPipe } from './pipes/distancias.pipe';
import { ComisionesPipe } from './pipes/comisiones.pipe';
import { RecetasComponent } from './rest/recetas/recetas.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisesComponent } from './rest/paises/paises.component';

// Registro los idiomas importados
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivasComponent,
    ActividadNgForComponent,
    AmigosComponent,
    TareasComponent,
    FormularioUsuariosComponent,
    FormularioClientesComponent,
    FormularioUsuariosMejoradoComponent,
    AngularPipesComponent,
    PipesPersonalizadosComponent,
    AlmacenamientoArchivosPipe,
    AlmacenamientoArchivosMultiplePipe,
    DistanciasPipe,
    ComisionesPipe,
    RecetasComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }], // Configuramos el idioma por defecto de la app
  bootstrap: [AppComponent]
})
export class AppModule { }
