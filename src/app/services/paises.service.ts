import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  constructor(private http: HttpClient) { }

  getPaises(continente: string) :Observable<IPais[]> {
    return this.http.get<IPais[]>(`https://restcountries.com/v3.1/region/${continente}`);
  }

}
