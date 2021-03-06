import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {
    this.clientes = [];
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      (clientes) => this.clientes = clientes
    );
  }

  public toggleTitle(): void {
    console.log('toggle button');
    //$('.title').slideToggle();
  }

}
