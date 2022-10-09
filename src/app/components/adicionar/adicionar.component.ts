import { Component, OnInit } from '@angular/core';
import { VeiculosService, Veiculos } from '../../services/veiculos.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  veiculos: Veiculos={
    id: '',
    placa: '',
    chassi: '',
    renavam: '',
    modelo: '',
    marca: '',
    ano: ''
  };

  constructor(private VeiculosService: VeiculosService, private router: Router) { }

  ngOnInit(): void {
  }

  adicionar(){

    this.VeiculosService.addVeiculo(this.veiculos).subscribe();

    this.router.navigate(['/inicio']);
  }

}
