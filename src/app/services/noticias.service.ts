import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadLines } from '../interfaces/articulos';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadLines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a084bf661fb04cd28b6e0bf782bc4b82');
  }
}
