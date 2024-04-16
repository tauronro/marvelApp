import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMovie(): Observable<any> {
    return this.http.get(this.apiUrl + '/movie' + '/now_playing');
  }

  getMovieDetail(id: string): Observable<any> {
    return this.http.get(this.apiUrl + '/movie' + '/' + id);
  }

  searchMovie(searchQuery: string, pages: string): Observable<any> {
    const params = new HttpParams()
      .set('query', searchQuery)
      .set('pages', pages);
    return this.http.get(this.apiUrl + '/search' + '/movie', { params: params  });
  }
}
