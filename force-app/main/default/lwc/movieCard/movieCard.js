import { api, LightningElement } from 'lwc';

export default class MovieCard extends LightningElement {
  @api movie;
  @api selectedMovieId;

  clickHandler(e){
    const evt = new CustomEvent('selectedmovie', {
      detail : this.movie.imdbID
    })
    console.log("se hizo click en: ",  this.movie.imdbID);

    this.dispatchEvent(evt);
  }

  get cardSelected(){
    console.log("vamos a comparar : ", this.selectedMovieId);
    console.log("con: ", this.movie.imdbID);
    
    return this.selectedMovieId === this.movie.imdbID 
    ? "card selected" 
    : "card";
  }
}