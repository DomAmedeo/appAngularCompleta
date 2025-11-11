import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipperService } from '../../services/shipper-service';
import { Shippers } from '../../classes/shippers';

@Component({
  selector: 'app-ricerca-shippers',
  imports: [CommonModule],
  templateUrl: './ricerca-shippers.html',
  styleUrl: './ricerca-shippers.css',
})
export class RicercaShippers {

  id?: number;
  nome?: string;
  tel?: string;
  
  constructor(private rottaAttiva: ActivatedRoute, private service: ShipperService, private router: Router){}

  ngOnInit(){
    this.rottaAttiva.params.subscribe(async(risultato) =>{
      const codice = risultato['codice'];
      if(codice && codice.trim !=="" || codice !== 0){
        let ship : Shippers | null = await this.service.detteaglio(codice);

        if(ship){
         this.id= ship.shipperId;
         this.nome = ship.companyName;
         this.tel = ship.phone;
        }

      }
    });
  }


  Modifica(varCodice: number | undefined) : void{
    if(varCodice)
      this.router.navigateByUrl("/shippers/modifica/"+varCodice)
  }

}
