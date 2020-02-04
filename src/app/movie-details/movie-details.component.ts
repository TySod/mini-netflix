import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieInfo: any;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMovie(550).subscribe(response => this.movieInfo = response)
  }

}
