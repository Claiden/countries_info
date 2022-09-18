import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pais } from '../models/model-api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService{

  private api= 'https://restcountries.com/v2';

  constructor(private http: HttpClient){}
  
  getPaises(){
    return this.http.get<Pais[]>(`${this.api}/all`)
  }

  getPaisPeloId( id: string ):Observable<Pais>{
    const url = `${ this.api }/alpha/${ id }`;
    return this.http.get<Pais>( url );
  }
  
  getPaisPeloNome(pais: string){
    return this.http.get<Pais[]>(`${this.api}/name/${pais}`).pipe(map(([res]) => res))
  }

  getPaisPorRegiao(regiao: string){
    return this.http.get<Pais[]>(`${this.api}/region/${regiao}`).pipe(map(([res]) => res))
  }
}