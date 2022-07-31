import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = environment.apiUrl;
  private characterUrl = '/v1/public/characters';
  // private envUrl = 'https://gateway.marvel.com:443/v1/public/characters/1011054?apikey=4aebae4aac20a7fbe93d00ffb6f53538&ts=1&hash=ed21b5306ceff85592f56d4dc1a9d6b7';

  constructor(private http: HttpClient) { }

  getHero() {
    console.log(this.apiUrl + this.characterUrl);
    return this.http.get(this.apiUrl + this.characterUrl);
  }
}
