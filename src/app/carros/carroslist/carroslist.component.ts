import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[]=[];
  modalService = inject(NgbModal)

  constructor(){

    let carro1: Carro = new Carro();
    carro1.nome = "Porsche Cayenne";
    carro1.ano = 2023;

    let carro2: Carro = new Carro();
    carro2.nome = "Porsche Panamera";
    carro2.ano = 2019;

    let carro3: Carro = new Carro();
    carro3.nome = "Porsche Taycan";
    carro3.ano = 2020;

    let carro4: Carro = new Carro();
    carro4.nome = "Porsche 911 carrera";
    carro4.ano = 1990;

 


    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);
    this.lista.push(carro4);
   
  }

  abrirModal(carroModal : any){
    this.modalService.open(carroModal, {size: 'lg'})
  }

  addList(carro: Carro){

    this.lista.push(carro);
    this.modalService.dismissAll();
  }
  
}
