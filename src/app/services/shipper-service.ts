import { Injectable } from '@angular/core';
import { Shippers } from '../classes/shippers';
import { Data } from '../classes/data';

@Injectable({
  providedIn: 'root',
})
export class ShipperService {

  async Elenca(): Promise<Shippers[]>{
    try{
      const risultato : Data = await(await fetch('https://northwind-api.miloudi.dev/v1/shippers?page=1&pageSize=100')).json();
      if(Array.isArray(risultato.data))
      return risultato.data
    }
    catch(error){
      console.log("ERRORE" + error)
    }
    return []
  }

  async salvaShippers(ship: Shippers): Promise<boolean>{
    try{
      let risultato : Data = await (await fetch('https://northwind-api.miloudi.dev/v1/shippers',
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
  
}
