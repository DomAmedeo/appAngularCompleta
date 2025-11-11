import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShipperService } from '../../services/shipper-service';
import { Shippers } from '../../classes/shippers';

@Component({
  selector: 'app-elenca-shippers',
  imports: [CommonModule],
  templateUrl: './elenca-shippers.html',
  styleUrl: './elenca-shippers.css',
})
export class ElencaShippers {

  elenco : Shippers[] = new Array();

  constructor(private service : ShipperService){}

  ngOnInit(){
    this.service.Elenca().then(ris =>{
      this.elenco = ris;
    })
  }
  
}
