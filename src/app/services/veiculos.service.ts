import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  url='/api';
  constructor(private http: HttpClient) { }

  // get veiculos
  getVeiculos(){
    return this.http.get(this.url);
  }

  //selecionar um veiculo especifico
  getUmVeiculo(id: string){
    return this.http.get(this.url+'/'+id);
  }

  //incluir Veiculo
  addVeiculo(veiculo: Veiculos){
    return this.http.post(this.url, veiculo);
  }

  //deletar veiculo
  deletarVeiculo(id: string){
    return this.http.delete(this.url+'/'+id);
  }

  //alterar veiculo
  editVeiculo(id: string, veiculo: Veiculos){
    return this.http.put(this.url+'/'+id, veiculo);
  }

}

export interface Veiculos{
  id:string;
  placa?: string;
  chassi?: string;
  renavam?: string;
  modelo?: string;
  marca?: string;
  ano?: string;
}
