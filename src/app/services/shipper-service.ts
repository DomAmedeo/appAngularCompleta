import { Injectable } from '@angular/core';
import { Shippers } from '../classes/shippers';
import { Data } from '../classes/data';

@Injectable({
  providedIn: 'root',
})
export class ShipperService {

  // // verifichiamo che l'oggetto restituito dall'api sia compatibile con il model che io a disposizione  
  // private isShipper(obj: any): obj is Shippers{
  //   if(typeof obj !== 'object' || obj === null) return false;
    
  //   return(
  //     (typeof obj.shipperId === 'number') &&
  //     (typeof obj.companyName === 'string')&&
  //     (typeof obj.phone === 'string')      
  //   );  
  // }

  // facciamo il controllo
  async Elenca(): Promise<Shippers[]>{
    try{
      const risultato : Data = await(await fetch('https://northwind-api.miloudi.dev/v1/shippers?page=1&pageSize=100')).json();
      if(Array.isArray(risultato.data)){
        // if(risultato.data.every(e => this.isShipper(e)))
        return risultato.data
        // else console.log("dati non valisi")
      }
      else
        console.log("DATI NON VALIDI")
    }
    catch(error){
      console.log("ERRORE" + error)
    }
    return []
  }

  async salvaShippers(ship: Shippers): Promise<boolean>{
    try{
      const risultato : Data = await (await fetch('https://northwind-api.miloudi.dev/v1/shippers',
      {
        headers:{"Content-Type": "application/json"},
        method:'Post',
        body: JSON.stringify(ship)
      })).json(); 
      return true 
      }catch(error){
      console.log("ERRORE"+error)
    }
    return false
  }
  
  async detteaglio(codice: number): Promise<Shippers | null>{
    try{
      const response = await fetch("https://northwind-api.miloudi.dev/v1/shippers/"+ codice);
      if (!response.ok){
        return null;
      }
      const risultato : Shippers = await response.json();
      console.log("RISULTATO RICEVUTO ", risultato)
      return risultato
    }catch(errore){
      console.log(errore)
    }
    return null
  }
  

  async Modifica( ship: Shippers): Promise<boolean>{
    try{
      const varcodice = ship.shipperId;
    
      const response= await fetch('https://northwind-api.miloudi.dev/v1/shippers/'+ ship.shipperId , {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ship)
      })

      if(!response.ok){
        console.log("errore HTTP")
        return false;
      }
      const risultato : Shippers = await response.json();
      console.log("RISULTATO RICEVUTO ", risultato)
      return true
    }
    catch(errore){
      console.log(errore)
    }
    return false

  }
}
