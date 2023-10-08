import { Component, inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro[]=[];
  modalService = inject(NgbModal);

  constructor(){
    let livro1: Livro = new Livro();
    livro1.titulo = "Romeu e Julietta";
    livro1.autor = "  William Shakespeare";

    let livro2: Livro = new Livro();
    livro2.titulo = "Odisseia";
    livro2.autor = "Homero";

    let livro3: Livro = new Livro();
    livro3.titulo = "Os Lusíadas";
    livro3.autor = " Luís Vaz de Camões";

    let livro4: Livro = new Livro();
    livro4.titulo = "Dom Quixote";
    livro4.autor = "Miguel de Cervantes";

 


    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
    this.lista.push(livro4);
  }

  abrirModal(livroModal: any){
    this.modalService.open(livroModal, { size: 'lg' });
  }

  addList(livro: Livro){
    this.lista.push(livro);
    this.modalService.dismissAll();
  }



}
