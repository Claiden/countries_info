import { Component, OnInit, Input } from '@angular/core';
import { Pais } from 'src/app/models/model-api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor() {
  }

  @Input()
  pais!: Pais;

  ngOnInit(): void {
    
  }
}
