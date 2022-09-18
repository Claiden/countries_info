import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-countries.services';
import { Pais } from 'src/app/models/model-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    paises!: Observable<Pais[]>;
  
    constructor(private api: ApiService) { }
  
    ngOnInit(): void {
      this.paises = this.api.getPaises();
    }
  }

