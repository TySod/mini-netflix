import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private API_KEY ='dc1d26857287b10af9a1e79039526d44'
  private _movieUrl = `https://api.themoviedb.org/3/movie/550?api_key=${this.API_KEY}`
  private _searchUrl =  `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${this.name}Jack+Reacher`
  private _imageBaseUrl = `https://image.tmdb.org/t/p/w45/`

  constructor(private _http:HttpClient) { }
  getMovies(name: string): Observable<IMovie[]> {
    return this._http.get(this._movieUrl).pipe((response=> response.json))
  }
}
