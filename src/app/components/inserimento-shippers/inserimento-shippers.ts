import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shippers } from '../../classes/shippers';
import { ShipperService } from '../../services/shipper-service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-inserimento-shippers',
  imports: [CommonModule,FormsModule],
  templateUrl: './inserimento-shippers.html',
  styleUrl: './inserimento-shippers.css',
})
export class InserimentoShippers {

  nome?: string;
  telefono?: string;

  constructor(private service: ShipperService, private router : Router){}
  salva(): void {

    let ship : Shippers ={
       companyName: this.nome,
       phone: this.telefono

    }
    this.service.salvaShippers(ship).then( ris => {
      if(ris == true){
        alert("STAPPO")
        this.router.navigateByUrl("shippers/elenca")
      }
      else{
      alert("Errore")

      }
    })
  }
}
