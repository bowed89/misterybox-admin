import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { GuardsGuard } from './guards/guards.guard';

const routes: Routes = [

    { path:'', component: LoginComponent },
    { path:'login', component: LoginComponent },
    { path:'listado', component: ListadoComponent, canActivate: [GuardsGuard] },
    { path:'**', pathMatch: 'full', component: LoginComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }