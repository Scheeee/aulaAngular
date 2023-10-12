import { Component, EventEmitter,Input, Output, inject} from '@angular/core';
import { Carro } from 'src/app/models/carro';
import {CarroService  } from 'src/app/service/carro.service';


@Component({
  selector: 'app-carrodetails',
  templateUrl: './carrodetails.component.html',
  styleUrls: ['./carrodetails.component.scss']
})
export class CarrodetailsComponent  {

  @Input() carro : Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  
  
  carroService = inject(CarroService);
  constructor(){}

  salvar(){
    this.carroService.save(this.carro).subscribe({
      next: carro => { 
        this.retorno.emit(carro);
      },
      error: erro => { 
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }

}
