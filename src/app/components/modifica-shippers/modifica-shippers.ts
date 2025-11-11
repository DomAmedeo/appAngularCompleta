import { Component } from '@angular/core';
import { ShipperService } from '../../services/shipper-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Shippers } from '../../classes/shippers';

@Component({
  selector: 'app-modifica-shippers',
  imports: [FormsModule],
  templateUrl: './modifica-shippers.html',
  styleUrl: './modifica-shippers.css',
})
export class ModificaShippers {

  
  id?: number;
  nome?: string;
  tel?: string;

  constructor(
    private service: ShipperService,
    private rottaAttiva: ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(){
    this.rottaAttiva.params.subscribe(async (risultato) =>{
      const codice = risultato['codice']
      if(codice && codice.trim() !== ""){
        let ship : Shippers | null = await this.service.detteaglio(codice)
        if(ship){
        this.id= ship.shipperId;
        this.nome = ship.companyName;
        this.tel = ship.phone;
        console.log(this.id)

        }


      }
      })
    this.service.detteaglio
  }

  Modifica() : void{
    let ship: Shippers = {
      shipperId: this.id,
      companyName: this.nome,
      phone: this.tel
    }
    this.service.Modifica(ship).then(ris => 
      {
        if(ris){
          alert("modifivca effettuata con successo");
          this.router.navigateByUrl("shippers/elenca")
        }
        else{
          alert("ERROEW")
        }
      })
  }



}
