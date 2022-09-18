import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pais } from '../models/model-api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get<Pais[]>(`${this.api}/all`);
  }

  getPaisByName(name: string) {
    return this.http
      .get<Pais[]>(`${this.api}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountriesByCodes(codes: string[]) {
    console.log(`${this.api}/alhpa?codes=${codes.join(';')}`);
    return this.http.get<Pais[]>(
      `${this.api}/alpha?codes=${codes.join(';')}`
    );
  }

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  buscarPais( termino: string ): Observable<Pais[]> {
    const url = `${ this.api }/name/${ termino }`;
    
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  buscarCapital( termino: string ):Observable<Pais[]>{
    const url = `${ this.api }/capital/${ termino }`;
    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  

  getPaisPorAlpha( id: string ):Observable<Pais>{
    const url = `${ this.api }/alpha/${ id }`;
    return this.http.get<Pais>( url );
  }
}