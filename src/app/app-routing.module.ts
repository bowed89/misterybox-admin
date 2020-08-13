import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ListadoComponent } from './componentes/listado/listado.component';



const routes: Routes = [

    { path:'', component: LoginComponent },
    { path:'login', component: LoginComponent },
    { path:'listado', component: ListadoComponent },
    { path:'**', pathMatch: 'full', component: LoginComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }