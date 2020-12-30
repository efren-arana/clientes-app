import { Routes, RouterModule} from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ModuleWithProviders } from '@angular/core';

//array con la definicion de todas las rutas
//array de objetos (rutas)
const routes: Routes = [
    {path: '', redirectTo: '/clientes', pathMatch: 'full'},
    {path: 'clientes', component: ClienteComponent},
    {path: 'directivas', component: DirectivaComponent},
    {path: '**', component: ClienteComponent}
];

export const appRoutingProviders: any[] = []; //configuracion necesaria para el routing
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
