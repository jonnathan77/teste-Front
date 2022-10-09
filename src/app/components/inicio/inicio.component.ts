import { Component, OnInit } from '@angular/core';
import { VeiculosService, Veiculos } from '../../services/veiculos.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public veiculos: Veiculos[];

  constructor(
    private VeiculosService: VeiculosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarVeiculos()
  }

  listarVeiculos(){
    this.VeiculosService.getVeiculos().subscribe(
      res=>{
        console.log(res)
        this.veiculos = <any>res;
      },
      err => console.log(err)
    );
  }

  deletar(id: string){
    this.VeiculosService.deletarVeiculo(id).subscribe(
      res=>{
        console.log('Veiculo deletado')
        this.listarVeiculos();
      },
      err=> console.log(err)
    );
  }

  alterar(id: string){
    this.router.navigate(['/edit/'+id]);
  }

}
