import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";
import { CLIENTES } from "./clientes.json";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ClienteService {

    private endPointUrl: string = "http://localhost:8080/api/clientes";

    constructor(private http: HttpClient) {

    }
    getClientes(): Observable<Cliente[]> {
        //Convertimos nuestra lista de cliente en un stream
        //return of(CLIENTES);
        return this.http.get<Cliente[]>(this.endPointUrl);
    }
}
