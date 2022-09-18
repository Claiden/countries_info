import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-countries.services';
import { Pais } from 'src/app/models/model-api';

const REGIOES = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private source: any;
  searchFilter?: string;
  regionFilter?: string;
  regionOptions = REGIOES;

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getAllCountries().subscribe((paises) => {
      this.source = paises;
    });
  }

  get paises() {
    return this.source
      ? this.source
          .filter((country:any) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )
          .filter((country:any) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          )
      : this.source;
  }
}
