import { HttpClient } from '@angular/common/http'; // Importa el servicio HttpClient para hacer peticiones HTTP.
import { Injectable } from '@angular/core'; // Importa el decorador Injectable para que este servicio pueda ser inyectado en otros componentes o servicios.
import { Observable } from 'rxjs'; // Importa Observable para trabajar con datos asíncronos.
import { ICategoriasMeal, IMeals } from '../interfaces/meal.interface'; // Importa la interfaz IMeals para tipar la respuesta de la API.

@Injectable({
  providedIn: 'root'
  // Indica que este servicio es un singleton y estará disponible en toda la aplicación.
  // Anteriormente se registraba en el módulo de Angular, pero ahora se hace con providedIn.
})
export class RecetasService {
  // El decorador @Injectable indica que este servicio puede ser inyectado en cualquier parte de la aplicación.
  // 'providedIn: 'root'' significa que el servicio es un singleton y estará disponible en toda la aplicación.

  constructor(private http: HttpClient) {}
  // El constructor inyecta el HttpClient en el servicio para permitir hacer peticiones HTTP.

  getRecetas(categoria: string): Observable<IMeals> {
    // Método que recibe una categoría como parámetro y devuelve un Observable de tipo IMeals.
    // Este método realiza una petición GET a la API de TheMealDB para obtener recetas filtradas por categoría.

    return this.http.get<IMeals>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`);
    // Hace una petición GET a la URL de la API, incluyendo la categoría en la query string.
    // La respuesta de la API es tipada como IMeals.
  }

  getCategorias(): Observable<ICategoriasMeal> {
    return this.http.get<ICategoriasMeal>(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
  }

}
