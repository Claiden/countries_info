import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api-countries.services';
import { Pais } from 'src/app/models/model-api';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})

export class PaisComponent implements OnInit {

  pais!: Pais;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: ApiService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )  ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );

  }

}
