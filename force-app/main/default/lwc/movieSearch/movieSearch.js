import { LightningElement } from 'lwc';

const DELAY = 300; // Delay para evitar la sobrecarga de la API

export default class MovieSearch extends LightningElement {
  selectedType = ''; // tipo de busqueda
  selectedSearch = ''; // palabra a buscar
  selectedPageN = '1'; // número de página
  loading = false; // spinner
  delayTimeout; // timeout de la busqueda
  searchResult = []; //resultados de la API
  selectedMovieId = ''; // pelicula seleccionada

  get typeOptions() {
    return [
      { label: 'Todos', value: '' },
      { label: 'Películas', value: 'movie' },
      { label: 'Series', value: 'series' },
      { label: 'Episodios', value: 'episode' },
    ];
  }

  get displaySearchResult(){
    return this.searchResult.length > 0;
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.loading = true;
    if (name === 'type') {
      this.selectedType = value;
    }
    else if (name === 'search') {
      this.selectedSearch = value;
    }
    else if (name === 'pageN') {
      this.selectedPageN = value;
    }
    //debouncing para evitar la sobrecarga de la API
    clearTimeout(this.delayTimeout);
    this.delayTimeout = setTimeout(() => {
      this.searchMovie();
    }, DELAY);

  }

  //método para buscar la película usando la API
  async searchMovie() {
    const URL = `https://www.omdbapi.com/?s=${this.selectedSearch}&type=${this.selectedType}&page=${this.selectedPageN}&apikey=460b0297`
    let response = await fetch(URL);
    let data = await response.json();
    
    this.loading = false;

    if (data.Response === 'True'){
      this.searchResult = data.Search;
    }
  }

  movieSelectedHandler(e){
    console.log("padre le envia: ",  e.detail);
    this.selectedMovieId = e.detail;
  }
}