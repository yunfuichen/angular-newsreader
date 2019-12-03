import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class NewsApiService {
  api_key = '3f15a39f036d4a40826c82cf412ce4bc';

  constructor(private http:HttpClient) { }
  initSources(){
     return this.http.get('https://newsapi.org/v2/sources?language=en&category=technology&apiKey='+this.api_key);
  }
  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
 
}