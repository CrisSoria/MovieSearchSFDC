import { LightningElement, wire } from 'lwc';
// Import message service features required for subscribing and the message channel
import {
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE,
  MessageContext,
} from 'lightning/messageService';
import MOVIE_CHANNEL from '@salesforce/messageChannel/movieChannel__c';

export default class MovieDetail extends LightningElement {
  loadComponent = false; //para el renderizado condicional.
  movieDetails = {}; //detalles encontrados de la película
  subscription = null;
  @wire(MessageContext)
  messageContext;

  get genreList() {
    return this.movieDetails.Genre ? this.movieDetails.Genre.split(', ') : [];
  }

  // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
  connectedCallback() {
    this.subscribeToMessageChannel();
  }
  disconnectedCallback() {
    this.unsubscribeToMessageChannel();
  }
  unsubscribeToMessageChannel() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }

  // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
  subscribeToMessageChannel() {
    if (!this.subscription) {
      this.subscription = subscribe(
        this.messageContext,
        MOVIE_CHANNEL,
        (message) => this.handleMessage(message),
        { scope: APPLICATION_SCOPE }
      );
    }
  }

  // Handler for message received by component
  handleMessage(message) {
    let movieId = message.movieId;
    this.fetchMovieDetails(movieId);
  }


  //llamada a la API para obtener los detalles de una película
  async fetchMovieDetails(movieId) {
    const URL = `https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=460b0297`;
    const res = await fetch(URL);
    const data = await res.json();
    this.loadComponent = true;
    this.movieDetails = data;
    console.log("data detalle desde API: ", data);
  }
}