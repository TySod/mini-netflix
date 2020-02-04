import{Component} from '@angular/core';
@Component({
  selector:'movie-list',
  template:`
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title: {{movies.title}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Details</a>
    <a href="#" class="btn btn-primary">Add to Favorite</a>
  </div>
</div>
  `})
export class MovielistComponent{}