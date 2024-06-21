import { Component } from '@angular/core';
import { IGiphy, IGiphyResponse } from 'src/app/interfaces/giphy.interface';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent {
  txtBuscar: string = '';
  limite: number = 10;
  gifsResponse: IGiphyResponse = {} as IGiphyResponse;
  // gifsResponse: IGiphyResponse = { data: [] as IGiphy[] }; opción 2 (ver interfaces)
  gifs: IGiphy[] = [] as IGiphy[];
  mostrarError = false;

  constructor(private giphyService: GiphyService) { }

  getGifs() {
    this.giphyService.getGifs(this.txtBuscar, this.limite).subscribe({
      next: (data: IGiphyResponse) => {
        console.log(data.data);
        this.gifsResponse = data;
        this.gifs = this.gifsResponse.data;
        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true),
      complete: () => console.log('completed')
    });
  }
}
