import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  Url: string="https://restcountries.eu/rest/v2/all"

  constructor(private httpClient:HttpClient) { 

  }
  getcard(){
    return this.httpClient.get(this.Url)

  }
} 
