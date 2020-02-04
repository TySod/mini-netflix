import { Routes } from "@angular/router"
import { MovielistComponent } from './app/movies/movie-list.component'
import { MovieDetailsComponent } from './app/movie-details/movie-details.component';

export const appRoutes: Routes =[
{path: 'movies', component: MovielistComponent},
{path: 'movies/:id', component: MovieDetailsComponent},
{path: '', redirectTo: 'movies', pathMatch: 'full'}
];