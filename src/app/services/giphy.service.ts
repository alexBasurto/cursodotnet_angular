import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGiphyResponse } from '../interfaces/giphy.interface';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  getGifs(busqueda: string, limite :number) :Observable<IGiphyResponse> {
    return this.http.get<IGiphyResponse>(`https://api.giphy.com/v1/gifs/search?q=${busqueda}&limit=${limite}&api_key=INs43pweYnAqgPDYPPUKjFBP6aat1ok2`);
  }
}
