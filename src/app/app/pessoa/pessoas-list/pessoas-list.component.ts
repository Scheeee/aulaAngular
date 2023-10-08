import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss']
})
export class PessoasListComponent {

  lista: Pessoa[] = [];
  modalService = inject(NgbModal);

  constructor(){
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = "Sche";
    pessoa1.idade = 19;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = "Gabriel emo";
    pessoa2.idade = 19;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = "Josimar";
    pessoa3.idade = 60;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = "Reginaldo";
    pessoa4.idade = 90;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = "Carlos";
    pessoa5.idade = 31;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = "Rafael";
    pessoa6.idade = 19;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = "Stephany";
    pessoa7.idade = 29;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = "Susan";
    pessoa8.idade = 32;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = "Gabriele";
    pessoa9.idade = 20;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = "Gabriel ";
    pessoa10.idade = 9;


    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);
    


  }
  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(pessoa: Pessoa){
    this.lista.push(pessoa);
    this.modalService.dismissAll();
  }

  

  

}
