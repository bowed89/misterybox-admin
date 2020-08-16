import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ClientesService } from './servicios/clientes.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListadoComponent } from './componentes/listado/listado.component';

import { GuardsGuard } from './guards/guards.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClientesService, 
    GuardsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
