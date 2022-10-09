import { Component, OnInit } from '@angular/core';
import { VeiculosService, Veiculos } from '../../services/veiculos.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {

  veiculos: Veiculos={
    id: '',
    placa: '',
    chassi: '',
    renavam: '',
    modelo: '',
    marca: '',
    ano: ''
  };

  constructor(
    private VeiculosService: VeiculosService,
    private router: Router,
    private activeRoute: ActivatedRoute)  { }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada:' + id_entrada);

    if(id_entrada){
      this.VeiculosService.getUmVeiculo(id_entrada).subscribe(
        res=>{
          this.veiculos = <any>res;
          console.log(res);
        },
        err=>console.log(err)
      )
    }
  }

  alterar(){
    this.VeiculosService.editVeiculo(this.veiculos.id , this.veiculos).subscribe(
      res=>{
        this.veiculos = <any>res;
        console.log(res);
      },
      err=>console.log(err)
    )
    this.router.navigate(['/inicio'])
  };


}
