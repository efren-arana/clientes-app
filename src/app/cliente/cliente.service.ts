import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";
import { CLIENTES } from "./clientes.json";
import { Observable,of } from "rxjs";

@Injectable()
export class ClienteService {

    getClientes(): Observable<Cliente[]> {
        //Convertimos nuestra lista de cliente en un stream
        return of(CLIENTES);
    }
}
