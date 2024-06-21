import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BindingComponent } from './introduccion/binding/binding.component';
import { DirectivasComponent } from './introduccion/directivas/directivas.component';
import { AngularPipesComponent } from './pipes/angular-pipes/angular-pipes.component';
import { PipesPersonalizadosComponent } from './pipes/pipes-personalizados/pipes-personalizados.component';
import { RecetasComponent } from './rest/recetas/recetas.component';
import { GiphyComponent } from './rest/giphy/giphy.component';

  
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'binding', component: BindingComponent},
  { path: 'directivas', component: DirectivasComponent},
  { path: 'pipes-angular', component: AngularPipesComponent},
  { path: 'pipes-personalizados', component: PipesPersonalizadosComponent},
  { path: 'recetas', component: RecetasComponent},
  { path: 'giphy', component: GiphyComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

