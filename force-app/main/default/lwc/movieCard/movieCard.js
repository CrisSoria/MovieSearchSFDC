import { api, LightningElement } from 'lwc';

export default class MovieCard extends LightningElement {
    @api movie;
    @api selectedMovieId;

    clickHandler(e) {
        const evt = new CustomEvent('selectedmovie', {
            detail: this.movie.imdbID
        });
        this.dispatchEvent(evt);
    }

    get cardSelected() {
        return this.selectedMovieId === this.movie.imdbID ? "card selected" : "card";
    }

    get isSelected() {
        return this.selectedMovieId === this.movie.imdbID;
    }

    get hasPoster() {
        return this.movie.Poster && this.movie.Poster !== 'N/A';
    }

    get typeFormatted() {
        return this.movie.Type ? this.movie.Type.charAt(0).toUpperCase() + this.movie.Type.slice(1) : '';
    }
}