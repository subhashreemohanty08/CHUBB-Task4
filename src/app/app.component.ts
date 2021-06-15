import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
  title = 'chubbtask3';
  cardData:any
  constructor(private cardDataservice:CardService){}
  ngOnInit(): void {
    this.cardDataservice.getcard().subscribe((response)=>{
      this.cardData=response
    }) 
  }

    
  






}


